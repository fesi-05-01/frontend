'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
} from '~/src/components/authpage/form';
import Button from '~/src/components/common/button';
import Input from '~/src/components/common/input';

const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$&*?!%])[A-Za-z\d!@$%&*?]{8,15}$/;

const formSchema = z
  .object({
    username: z
      .string()
      .min(2, {
        message: '이름은 2글자 이상이어야 합니다.',
      })
      .nonempty({ message: '이름을 입력해주세요' }),
    email: z
      .string()
      .email({ message: '이메일 형식이 아닙니다.' })
      .nonempty({ message: '이메일을 입력해주세요' }),
    company: z
      .string()
      .min(2, { message: '회사명을 정확히 입력해주세요' })
      .nonempty({ message: '회사명을 입력해주세요' }),
    password: z
      .string()
      .min(8, { message: '비밀번호는 8자리 이상이어야 합니다.' })
      .regex(passwordRegex, {
        message: '영문, 숫자, 특수문자(~!@#$%^&*)를 모두 조합해 주세요.',
      })
      .nonempty({ message: '비밀번호를 입력해주세요' }),
    confirmPassword: z
      .string()
      .nonempty({ message: '비밀번호를 다시 입력해주세요' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: '비밀번호가 일치하지 않습니다.',
  });

export default function SignupForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onSubmit',
    // 기능 요구 사항 검사 시점 버튼 클릭 후라서 'onSubmit' 으로 설정
    defaultValues: {
      username: '',
      email: '',
      company: '',
      password: '',
      confirmPassword: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert('회원가입이 완료되었습니다.' + JSON.stringify(values));
    router.push('/login');
  }

  console.log(form.formState.errors);
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-[24px]"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="username">이름</FormLabel>
                <Input
                  error={form.formState.errors.username?.message}
                  type="text"
                  placeholder="이름을 입력해주세요"
                  {...field}
                />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email">이메일</FormLabel>
                <Input
                  error={form.formState.errors.email?.message}
                  type="email"
                  placeholder="이메일을 입력해주세요"
                  {...field}
                />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="company">회사</FormLabel>
                <Input
                  error={form.formState.errors.company?.message}
                  type="text"
                  placeholder="회사를 입력해주세요"
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="confirmPassword">비밀번호 확인</FormLabel>
                <Input
                  error={form.formState.errors.confirmPassword?.message}
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  {...field}
                />
              </FormItem>
            )}
          />
          <Button type="submit">회원가입</Button>
        </form>
      </Form>
    </>
  );
}
