'use client';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { type z } from 'zod';

import { loginSchema } from '~/src/components/authpage/validation/auth-schemas';
import Button from '~/src/components/common/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
} from '~/src/components/common/form';
import Input from '~/src/components/common/input';
import { post } from '~/src/services/api';
import { setAccessTokenAtom } from '~/src/store/auth-store';

import {
  type ErrorResponseData,
  type SigninData,
  type TokenResponseData,
} from './types';

export default function LoginForm() {
  const router = useRouter();
  const setAccessToken = useSetAtom(setAccessTokenAtom);
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const mutation = useMutation<
    TokenResponseData,
    ErrorResponseData,
    SigninData
  >({
    mutationFn: (data: z.infer<typeof loginSchema>) =>
      post<TokenResponseData>('/auths/signin', {
        email: data.email,
        password: data.password,
      }),
    onSuccess: (data) => {
      setAccessToken(data.token);
      alert('로그인이 완료되었습니다.');
      router.push('/');
    },
    onError: (error) => {
      console.error(error);

      if (error?.data?.code === 'INVALID_CREDENTIALS') {
        form.setError('password', {
          type: 'manual',
          message: '비밀번호가 아이디와 일치하지 않습니다.',
        });
      }
      if (error?.data?.code === 'USER_NOT_FOUND') {
        form.setError('email', {
          type: 'manual',
          message: '존재하지 않는 아이디입니다.',
        });
      }
      if (error?.data?.code === 'SERVER_ERROR') {
        form.setError('email', {
          type: 'manual',
          message: '서버 오류가 발생했습니다',
        });
      }
    },
  });

  const { email, password } = form.watch();

  const isFormFilled = email && password;

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    mutation.mutate(values);
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
        <Button type="submit" disabled={!isFormFilled}>
          {mutation.isPending ? '로그인 중...' : '로그인'}
        </Button>
      </form>
    </Form>
  );
}
