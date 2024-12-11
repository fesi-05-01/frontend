'use client';

import { useAtom } from 'jotai';
import { toast } from 'sonner';

import Button from '~/src/components/common/button';
import { userInfoAtom } from '~/src/stores/auth-store';
import { cn } from '~/src/utils/class-name';

interface FloatingBarProps {
  createdById: number;
}

export default function FloatingBar({ createdById }: FloatingBarProps) {
  const [user] = useAtom(userInfoAtom);
  const isCreator = user?.id === createdById;

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      const currentUrl = window.location.href;
      void navigator.clipboard.writeText(currentUrl);
      toast.success('링크가 복사되었습니다.');
    }
  };

  return (
    <footer className="fixed inset-x-0 bottom-0 z-10 flex min-h-floatingBar items-center border-t-2 border-secondary-900 bg-white py-5">
      <section
        className={cn(
          'mx-auto flex h-full w-full max-w-screen-desktop items-center justify-between',
          'px-4 tablet:px-6 desktop:px-[6.25rem]',
        )}
      >
        {isCreator ? (
          <div className="flex w-full items-center justify-between">
            <div className="w-[204px] tablet:w-full">
              <h2 className="font-semibold">더 건강한 나를 위한 프로그램 🏃</h2>
              <p className="text-xs">
                국내 최고 웰리스 전문가와 프로그램을 통해 지친 몸과 마음을
                회복해봐요
              </p>
            </div>
            <Button className="w-[115px]" type="button">
              참여하기
            </Button>
          </div>
        ) : (
          <div className="flex w-full flex-col gap-2 tablet:flex-row tablet:justify-between">
            <div className="flex flex-col gap-1">
              <h2 className="font-semibold"> 더 건강한 나를 위한 프로그램🏃</h2>
              <p className="text-xs">
                모임을 공유해서 더 많은 사람들이 참여할 수 있도록 독려해봐요
              </p>
            </div>
            <div className="flex w-full gap-2 tablet:w-[238px]">
              <Button variant="outlined" type="button">
                취소하기
              </Button>
              <Button type="button" onClick={handleShare}>
                공유하기
              </Button>
            </div>
          </div>
        )}
      </section>
    </footer>
  );
}
