import { AxiosRequestConfig } from 'axios';
import { getAllPaymentsApi, getAllUsersApi } from './admin.service';
import { getAllCategoriesApi } from './category.service';
import { getAllProductsApi } from './product.service';

export async function getDashboardCardsDataApi(options?: AxiosRequestConfig) {
  const [users, products, categories, orders] = await Promise.all([
    getAllUsersApi({ options }),
    getAllProductsApi(),
    getAllCategoriesApi(),
    getAllPaymentsApi({ options }),
  ]);

  const usersCount = users.length;
  const productsCount = products.length;
  const categoriesCount = categories.length;
  const ordersCount = orders.length;

  return { usersCount, productsCount, categoriesCount, ordersCount };
}
