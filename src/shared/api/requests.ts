/* eslint-disable @typescript-eslint/no-explicit-any */
import { clearUser, getUser } from '../../utils/user';
import axios from 'axios';

const baseURL = process.env.REACT_API_BASE_URL;

const request = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
request.interceptors.request.use(
  async (config: any) => {
    const user = getUser();
    if (user?.access) {
      if (user?.isExpiredRefresh) {
        clearUser();
        window.location.href = '/';
        return config;
      }
      // if (user?.isExpiredAccess) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer` + ' ' + user?.access,
      };
      return config;
      // }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export { request };
