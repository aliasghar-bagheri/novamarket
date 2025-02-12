import { AxiosRequestConfig } from 'axios';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

export function setCookieOnReq(cookies: ReadonlyRequestCookies) {
  let options: AxiosRequestConfig = {};

  const accessToken = cookies.get('accessToken');
  const refreshToken = cookies.get('refreshToken');

  if (accessToken && refreshToken) {
    options = {
      headers: {
        Cookie: `${accessToken.name}=${accessToken.value}; ${refreshToken.name}=${refreshToken.value}`,
      },
    };
  }

  return options;
}
