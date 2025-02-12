import { http } from '@/lib/axios/config';
import { I_Product } from '@/types';
import { TServiceApiArguments } from '@/types/services';

export async function getAllProductsApi(args?: TServiceApiArguments): Promise<I_Product[]> {
  try {
    const { data } = await http.get(`/product/list?${args?.queries}`, args?.options);

    const { products } = data.data || {};

    return products;
  } catch (error) {
    console.log(error);
    return [];
  }
}
