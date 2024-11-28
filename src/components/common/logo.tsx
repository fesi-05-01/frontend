'use client';

import Image from 'next/image';
import Link from 'next/link';

import logolarge from '~/src/assets/images/logo-large.png';
import logosmall from '~/src/assets/images/logo-small.png';

export default function Logo() {
  return (
    <Link href="/">
      <Image
        className="hidden tablet:block"
        src={logolarge}
        alt="logolarge"
        width={65}
        height={22}
      />
      <Image
        className="block tablet:hidden"
        src={logosmall}
        alt="logosmall"
        width={52}
        height={17}
      />
    </Link>
  );
}
