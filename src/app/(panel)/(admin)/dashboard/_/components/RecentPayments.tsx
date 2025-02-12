import DataTable from '@/components/ui/DataTable';
import { getAllPaymentsApi } from '@/services/admin.service';
import { setCookieOnReq } from '@/util/setCookieOnReq';
import { cookies } from 'next/headers';
import { recentPaymentColumns } from './payment/columns';

export default async function RecentPayments() {
  const cookie = await cookies();
  const options = setCookieOnReq(cookie);

  const payments = await getAllPaymentsApi({ options });

  return (
    <DataTable
      columns={recentPaymentColumns}
      dataList={payments}
    />
  );
}
