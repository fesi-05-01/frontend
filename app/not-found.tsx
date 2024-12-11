import Link from 'next/link';

import Button from '~/src/components/common/button';

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <p className="text-3xl font-bold text-secondary-600"> 404 Not Found</p>
        <p className="text-sm text-secondary-500">
          {' '}
          페이지를 찾을 수 없습니다. 잘못된 주소거나 혹은 삭제된 페이지일 수
          있습니다
        </p>
      </div>

      <Button className="w-[136px]">
        <Link href="/">홈으로 돌아가기</Link>
      </Button>
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-600 border-t-secondary-200">
          {' '}
        </div>
        <p className="text-lg text-secondary-500"> Loading ... </p>
      </div>
    </div>
  );
}
