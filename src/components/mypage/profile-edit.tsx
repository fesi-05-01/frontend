import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { useQueryClient } from '@tanstack/react-query';
import { type File } from '@web-std/file';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const { data: user } = useGetUserInfo();
  const form = useForm<UserEditType>({
    defaultValues: {
      companyName: user?.companyName || '',
      image: user?.image || '',
    },
  });

  const {
    formState: { isDirty },
  } = form;

  const handleCancel = () => {
    setIsModalOpen(false);
    form.reset();
    setPreviewImage(user?.image || null);
    setImageFile(null);
  };

  const mutation = useEditUser();
  const queryClient = useQueryClient();
  const onSubmit = async (data: UserEditType) => {
    const formData = new FormData();
    formData.append('companyName', data.companyName || '');

    formData.append('image', imageFile || user?.image || '');

    mutation.mutate(formData, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['user'] });
        handleCancel();
      },
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const maxFileSize = 2 * 1024 * 1024;
      if (file.size > maxFileSize) {
        return;
      }

      setImageFile(file);
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
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

        <DialogContent
          aria-describedby="회원정보 수정하기 폼"
          className="flex flex-col gap-6"
        >
          <DialogHeader>
            <DialogTitle>프로필 수정하기</DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex w-full flex-col gap-6"
            >
              <div
                className="relative h-14 w-14"
                onClick={() => document.getElementById('fileInput')?.click()}
              >
                <Image
                  src={previewImage || user?.image || MyProfileEdit}
                  alt="프로필 사진"
                  width={56}
                  height={56}
                  className="cursor-pointer overflow-hidden rounded-full border object-cover"
                />
                <input
                  type="file"
                  hidden
                  id="fileInput"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>

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
