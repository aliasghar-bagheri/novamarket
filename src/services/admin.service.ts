import { http } from '@/lib/axios/config';
import { I_Payment, I_User } from '@/types';
import {
  ActionApiResult,
  CreateProductData,
  TServiceApiArguments,
  UpdateProductData,
} from '@/types/services';

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

export async function uploadProductImageApi(file: File, onProgress?: (progress: number) => void) {
  try {
    const formData = new FormData();
    formData.append('productImage', file);

    const { data } = await http.post('/admin/product/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress(progress) {
        if (onProgress) {
          const { total, loaded } = progress;
          onProgress(Math.floor((loaded * 100) / (total || 3000)));
        }
      },
    });

    return data;
  } catch (error) {
    throw error;
  }
}

export async function createProductApi(productData: CreateProductData): Promise<ActionApiResult> {
  return http.post('/admin/product/add', productData).then(({ data }) => data.data);
}

export async function updateProductApi({
  productId,
  productData,
}: UpdateProductData): Promise<ActionApiResult> {
  return http
    .patch(`/admin/product/update/${productId}`, productData)
    .then(({ data }) => data.data);
}

export async function deleteProductApi(productId: string): Promise<ActionApiResult> {
  return http.delete(`/admin/product/remove/${productId}`).then(({ data }) => data.data);
}
