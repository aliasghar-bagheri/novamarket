import DataTable from '@/components/ui/DataTable';
import { getAllUsersApi } from '@/services/admin.service';
import { setCookieOnReq } from '@/util/setCookieOnReq';
import { cookies } from 'next/headers';
import queryString from 'query-string';
import { userColumns } from './users/columns';

export default async function RecentUsers() {
  const queries = queryString.stringify({ limit: 5 });
  const cookie = await cookies();
  const options = setCookieOnReq(cookie);
  const users = await getAllUsersApi({ queries, options });

  return (
    <DataTable
      columns={userColumns}
      dataList={users}
    />
  );
}
