import { getUserApi } from '@/services/user.service';
import { I_User } from '@/types';
import { AxiosRequestConfig } from 'axios';
import { NextRequest } from 'next/server';

export async function middlewareAuth(request: NextRequest): Promise<I_User | undefined> {
  const accessToken = request.cookies.get('accessToken');
  const refreshToken = request.cookies.get('refreshToken');

  if (accessToken && refreshToken) {
    const options: AxiosRequestConfig = {
      headers: {
        Cookie: `${accessToken.name}=${accessToken.value}; ${refreshToken.name}=${refreshToken.value}`,
      },
    };

    try {
      const data = await getUserApi(options);

      const { user } = data || {};

      return user;
    } catch (error) {
      console.log(error);

      return undefined;
    }
  }

  return undefined;
}
