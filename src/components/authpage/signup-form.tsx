'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { type z } from 'zod';

import { signupSchema } from '~/src/components/authpage/validation/auth-schemas';
import Button from '~/src/components/common/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
} from '~/src/components/common/form';
import Input from '~/src/components/common/input';
import { post } from '~/src/services/api';

export interface Signuptype {
  name: string;
  email: string;
  companyName: string;
  password: string;
}
interface ErrorResponseData {
  data: {
    code: string;
    message: string;
  };
}

interface SuccessResponseData {
  message: string;
}

export default function SignupForm() {
  const router = useRouter();

  const mutation = useMutation<
    SuccessResponseData,
    ErrorResponseData,
    Signuptype
  >({
    mutationFn: (data) =>
      post('auths/signup', {
        name: data.name,
        email: data.email,
        companyName: data.companyName,
        password: data.password,
      }),
    onSuccess: () => {
      alert('회원가입이 완료되었습니다.');
      router.push('/login');
    },
    onError: (error) => {
      console.error(error);
      console.log('회원가입 오류 데이터:', error?.data.message);

      form.setError('email', {
        type: 'manual',
        message: error?.data.message,
      });
    },
  });

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    mode: 'all',
    defaultValues: {
      name: '',
      email: '',
      companyName: '',
      password: '',
      confirmPassword: '',
    },
  });

  const { name, email, companyName, password, confirmPassword } = form.watch();

  const isFormFilled =
    name && email && companyName && password && confirmPassword;

  const onSubmit = (values: z.infer<typeof signupSchema>) => {
    mutation.mutate(values);
  };

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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name">이름</FormLabel>
                <Input
                  error={form.formState.errors.name?.message}
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
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="companyName">회사</FormLabel>
                <Input
                  error={form.formState.errors.companyName?.message}
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
          <Button type="submit" disabled={!isFormFilled}>
            {mutation.isPending ? '회원가입 중...' : '회원가입'}
          </Button>
        </form>
      </Form>
    </>
  );
}
