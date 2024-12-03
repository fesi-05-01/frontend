'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

import profilelarge from '~/src/assets/images/profile-large.png';
import profilesmall from '~/src/assets/images/profile-small.png';
import Dropdown from '~/src/components/common/dropdown';
import Gnb from '~/src/components/common/gnb';
import { cn } from '~/src/utils/class-name';

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const token = Cookies.get('accessToken');
    setAccessToken(token || null);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    if (option === '로그아웃') {
      Cookies.remove('accessToken');
      setAccessToken(null);
      router.push('/login');
    } else if (option === '마이페이지') {
      router.push('/mypage');
    }
    setIsOpen(false);
  };
  return (
    <header className="fixed inset-x-0 top-0 z-10 h-header border-b-2 border-secondary-900 bg-primary-600 text-primary-50">
      <section
        className={cn(
          'mx-auto flex h-full max-w-screen-desktop items-center justify-between',
          'px-4 tablet:px-6 desktop:px-0',
        )}
      >
        <Gnb />
        {/* 파일 분리 고민중 수정할 예정 프로필 사진 기능 및 로그인 상태관리 방식에 따라 바뀔 예정입니다.
         */}
        <div>
          {accessToken ? (
            <div onClick={toggleDropdown} className="relative text-gray-800">
              <Image
                className="hidden tablet:block"
                src={profilelarge}
                alt="profile-large"
                width={40}
                height={40}
              />
              <Image
                className="block tablet:hidden"
                src={profilesmall}
                alt="profile-small"
                width={40}
                height={40}
              />
              {isOpen && (
                <Dropdown
                  options={['마이페이지', '로그아웃']}
                  onSelect={handleSelect}
                  version="Login"
                  selectedOption={selectedOption}
                />
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="text-sm font-semibold tablet:text-base"
            >
              로그인
            </Link>
          )}
        </div>
      </section>
    </header>
  );
}
