import { http } from '@/lib/axios/config';
import { CheckOTPData, CheckOTPResult, GetOTPData, GetOTPResult } from '@/types/services/auth';

// -------------------- Get otp code
export async function getOTPApi(data: GetOTPData): Promise<GetOTPResult> {
  return http.post('/user/get-otp', data).then(({ data }) => data.data);
}

// -------------------- Check otp code
export async function checkOTPApi(data: CheckOTPData): Promise<CheckOTPResult> {
  return http.post('/user/check-otp', data).then(({ data }) => data.data);
}

// -------------------- SignOut user
export async function signOutApi(): Promise<void> {
  return http.post('/user/logout');
}
