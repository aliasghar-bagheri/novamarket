import DashboardCard from '@/app/(panel)/_/components/common/cards/DashboardCard';
import { getDashboardCardsDataApi } from '@/services/dashboard.service';
import { setCookieOnReq } from '@/util/setCookieOnReq';
import { cookies } from 'next/headers';

export default async function DashboardCardList() {
  const cookie = await cookies();
  const options = setCookieOnReq(cookie);

  const { usersCount, categoriesCount, productsCount, ordersCount } =
    await getDashboardCardsDataApi(options);

  return (
    <div className="container flex flex-wrap justify-center gap-5">
      <DashboardCard
        value={usersCount}
        type="users"
      />
      <DashboardCard
        value={productsCount}
        type="products"
      />
      <DashboardCard
        value={ordersCount}
        type="orders"
      />
      <DashboardCard
        value={categoriesCount}
        type="categories"
      />
    </div>
  );
}
