import { http } from '@/lib/axios/config';
import { I_Category } from '@/types';
import { TServiceApiArguments } from '@/types/services';

export async function getAllCategoriesApi(args?: TServiceApiArguments): Promise<I_Category[]> {
  try {
    const { data } = await http.get(`/category/list?${args?.queries}`, args?.options);

    const { categories } = data.data || {};

    return categories;
  } catch (error) {
    console.log(error);
    return [];
  }
}
