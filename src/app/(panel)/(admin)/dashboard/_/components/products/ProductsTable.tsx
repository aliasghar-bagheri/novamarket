import DataTable from '@/components/ui/DataTable';
import { getAllProductsApi } from '@/services/product.service';
import { setCookieOnReq } from '@/util/setCookieOnReq';
import { cookies } from 'next/headers';
import { recentProductColumns } from './columns';

export default async function ProductsTable() {
  const cookie = await cookies();
  const options = setCookieOnReq(cookie);
  const products = await getAllProductsApi({ options });

  return (
    <DataTable
      columns={recentProductColumns}
      dataList={products}
    />
  );
}
