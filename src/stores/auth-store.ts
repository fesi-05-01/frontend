import { atom } from 'jotai';
import Cookies from 'js-cookie';

import { type User } from '~/src/services/auths/types';

// 로그인 쿠키
const initialToken = Cookies.get('accessToken') || null;
export const accessTokenAtom = atom(initialToken);

export const setAccessTokenAtom = atom(
  null,
  (get, set, newToken: string | null) => {
    if (newToken) {
      Cookies.set('accessToken', newToken, {
        secure: true, // HTTPS 에서만
        sameSite: 'strict', // CSRF
        expires: 1 / 24,
      });
    } else {
      Cookies.remove('accessToken');
    }
    set(accessTokenAtom, newToken);
  },
);

// 유저 쿠키
export const getUserCookies = (): User | null => {
  const user = Cookies.get('userInfo');
  if (user) {
    return JSON.parse(user);
  }
  return null;
};

export const userInfoAtom = atom<User | null>(getUserCookies());

export const setUserInfoAtom = atom(
  null,
  (get, set, newUserInfo: User | null) => {
    if (newUserInfo) {
      Cookies.set('userInfo', JSON.stringify(newUserInfo), {
        secure: true,
        sameSite: 'strict',
        expires: 1 / 24,
      });
    } else {
      Cookies.remove('userInfo');
    }
    set(userInfoAtom, newUserInfo);
  },
);
