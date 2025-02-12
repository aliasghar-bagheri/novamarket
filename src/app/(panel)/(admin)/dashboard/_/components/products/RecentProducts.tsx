import DataTable from '@/components/ui/DataTable';
import { setCookieOnReq } from '@/util/setCookieOnReq';
import { cookies } from 'next/headers';
import queryString from 'query-string';
import { recentProductColumns } from './columns';
import { getAllProductsApi } from '@/services/product.service';

export default async function RecentProducts() {
  const queries = queryString.stringify({ limit: 5 });
  const cookie = await cookies();
  const options = setCookieOnReq(cookie);
  const products = await getAllProductsApi({ queries, options });

  return (
    <DataTable
      columns={recentProductColumns}
      dataList={products}
    />
  );
}
