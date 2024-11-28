'use client';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import Button from '~/src/components/common/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
} from '~/src/components/common/form';
import Input from '~/src/components/common/input';

const formSchema = z.object({
  email: z.string().nonempty({ message: '이메일을 입력해주세요' }),
  password: z.string().nonempty({ message: '비밀번호를 입력해주세요' }),
});

export default function LoginForm() {
  const rotuer = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    rotuer.push('/');
    alert('로그인 성공' + JSON.stringify(values));
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-[24px]"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">아이디</FormLabel>
              <Input
                error={form.formState.errors.email?.message}
                type="email"
                placeholder="아이디를 입력해주세요"
                {...field}
              />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="password">비밀번호</FormLabel>
              <Input
                error={form.formState.errors.password?.message}
                type="password"
                placeholder="비밀번호를 입력해주세요"
                {...field}
              />
            </FormItem>
          )}
        />
        <Button type="submit">로그인</Button>
      </form>
    </Form>
  );
}
