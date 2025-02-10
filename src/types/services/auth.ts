import { I_User } from '..';

export type GetOTPData = Pick<I_User, 'phoneNumber'>;

export interface GetOTPResult extends Pick<I_User, 'phoneNumber'> {
  message: string;
  expiresIn: number;
}

export interface CheckOTPData extends Pick<I_User, 'phoneNumber'> {
  otp: string;
}

export interface CheckOTPResult {
  message: string;
  user: I_User;
}
