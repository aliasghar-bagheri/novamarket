import { Suspense } from 'react';
import DashboardCardList from './_/components/DashboardCardList';
import { DashboardCardsSkeleton } from '@/components/ui/Skeleton';
import RecentPayments from './_/components/RecentPayments';
import RecentUsers from './_/components/users/RecentUsers';
export default function DashboardPage() {
  return (
    <div className="w-full space-y-10">
      <div>
        <h2 className="text-secondary-900 font-medium text-xl">داشبورد</h2>
        <div className="mt-5">
          <Suspense fallback={<DashboardCardsSkeleton />}>
            <DashboardCardList />
          </Suspense>
        </div>
      </div>
      <div className="grid grid-cols-12 md:gap-x-6 gap-y-10 md:gap-y-0">
        <div className="col-span-full md:col-span-7 xl:col-span-8 2xl:col-span-9 space-y-5">
        <h3 className="text-secondary-900 text-base">مشتریان اخیر</h3>
        <div className="mt-5">
          <Suspense>
            <RecentUsers />
          </Suspense>
        </div>
        <div className="col-span-full md:col-span-5 xl:col-span-4 2xl:col-span-3 space-y-5">
          <h3 className="text-secondary-900 text-base">تراکنش های اخیر</h3>
          <Suspense>
            <RecentPayments />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
