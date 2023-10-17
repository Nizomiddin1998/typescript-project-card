import dayjs from 'dayjs';
import jwt_decode from 'jwt-decode';
import type { IUser, IToken } from '../types/user';

export const clearUser = () => {
  localStorage.clear();
  sessionStorage.clear();
};

export const setUser = async (data: IUser) => {
  const user = JSON.stringify(data);
  localStorage.setItem('user', user);
};

export const getUser = (): Partial<IUser> | undefined => {
  const user: IUser = JSON.parse(localStorage.getItem('user') as string);
  if (user?.access) {
    const jwt_access: IToken = jwt_decode(user.access);
    const jwt_refresh: IToken = jwt_decode(user.refresh);
    const isExpiredAccess = dayjs.unix(jwt_access.exp).diff(dayjs()) < 1;
    const isExpiredRefresh = dayjs.unix(jwt_refresh.exp).diff(dayjs()) < 1;
    return { ...user, isExpiredAccess, isExpiredRefresh };
  }
};
