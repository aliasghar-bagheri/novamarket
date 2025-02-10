import { http } from '@/lib/axios/config';
import { GetUserResult } from '@/types/services/auth';
import { AxiosRequestConfig } from 'axios';

// -------------------- Get current user
export async function getUserApi(options?: AxiosRequestConfig): Promise<GetUserResult> {
  return http.get('/user/profile', options).then(({ data }) => data.data);
}
