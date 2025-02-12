import { http } from '@/lib/axios/config';
import { I_Payment, I_User } from '@/types';
import { ActionApiResult, TServiceApiArguments } from '@/types/services';

export async function getAllUsersApi(args?: TServiceApiArguments): Promise<I_User[]> {
  try {
    const { data } = await http.get(`/admin/user/list?${args?.queries}`, args?.options);

    const { users } = data.data || {};

    return users;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getAllPaymentsApi(args?: TServiceApiArguments): Promise<I_Payment[]> {
  try {
    const { data } = await http.get(`/admin/payment/list?${args?.options}`, args?.options);

    const { payments } = data.data || {};

    return payments;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function deleteProductApi(productId: string): Promise<ActionApiResult> {
  return http.delete(`/admin/product/remove/${productId}`).then(({ data }) => data.data);
}
