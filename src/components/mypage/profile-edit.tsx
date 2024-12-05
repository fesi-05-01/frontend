'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

import CircleEdit from '~/src/assets/icons/circle-edit.svg?url';
import MyProfileEdit from '~/src/assets/images/mypage-profile-edit.png';
import Button from '~/src/components/common/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
} from '~/src/components/common/form';
import Input from '~/src/components/common/input';
import { DialogFooter } from '~/src/components/common/modal';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/src/components/common/modal';
import { useEditUser } from '~/src/services/auths/edit-user';
import { useGetUserInfo } from '~/src/services/auths/get-user';
import { type UserEditType } from '~/src/services/auths/types';

export default function ProfileEdit() {
  const { data: user } = useGetUserInfo();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const form = useForm<UserEditType>({
    defaultValues: {
      companyName: user?.companyName,
      // image: user?.image || '',
    },
  });

  const {
    formState: { isDirty },
  } = form;
  const handleCancel = () => {
    setIsModalOpen(false);
    form.reset();
  };

  const mutation = useEditUser();

  const onSubmit = (data: UserEditType) => {
    mutation.mutate(data);
    setIsModalOpen(false);
  };
  return (
    <>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <Image
            src={CircleEdit}
            alt="circle-edit"
            width={32}
            height={32}
            className="cursor-pointer rounded-2xl"
          />
        </DialogTrigger>
        <DialogContent className="flex flex-col gap-6">
          <DialogHeader>
            <DialogTitle>프로필 수정하기</DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex w-full flex-col gap-6"
            >
              <Image
                src={MyProfileEdit}
                width={56}
                height={56}
                className=""
                alt="my-profile-edit"
              />

              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="companyName">회사</FormLabel>
                    <Input type="text" {...field} />
                  </FormItem>
                )}
              />

              <DialogFooter className="flex gap-2">
                <Button onClick={handleCancel} type="button" variant="outlined">
                  취소
                </Button>
                <Button type="submit" disabled={!isDirty}>
                  수정하기
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
