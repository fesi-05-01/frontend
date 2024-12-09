import { atom } from 'jotai';
import Cookie from 'js-cookie';

const initialToken = Cookie.get('accessToken') || null;

export const accessTokenAtom = atom(initialToken);

export const setAccessTokenAtom = atom(
  null,
  (get, set, newToken: string | null) => {
    if (newToken) {
      Cookie.set('accessToken', newToken, {
        secure: true, // HTTPS 에서만
        sameSite: 'strict', // CSRF
        expires: 1 / 24,
      });
    } else {
      Cookie.remove('accessToken');
    }
    set(accessTokenAtom, newToken);
  },
);
