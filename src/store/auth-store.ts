import Cookies from 'js-cookie';
import { create } from 'zustand';

interface AuthStore {
  accessToken: string | null;
  setAccessToken: (token: string) => void;
  logOut: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  accessToken: Cookies.get('accessToken') || null,
  setAccessToken: (token) => {
    Cookies.set('accessToken', token, {
      expires: 1 / 24,
      secure: true,
      sameSite: 'strict',
    });
    set({ accessToken: token });
  },
  logOut: () => {
    Cookies.remove('accessToken');
    set({ accessToken: null });
  },
}));
