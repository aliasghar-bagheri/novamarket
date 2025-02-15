import { ProductSchemaType } from '@/lib/validations/product';
import { I_Cart, I_Payment, I_User } from '..';
import { AxiosRequestConfig } from 'axios';

export interface TServiceApiArguments {
  queries?: string;
  options?: AxiosRequestConfig;
}

export interface ActionApiResult {
  message: string;
}

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

export interface GetUserResult {
  user: I_User;
  payment: I_Payment;
  cart: I_Cart;
}

export type CreateProductData = ProductSchemaType;
