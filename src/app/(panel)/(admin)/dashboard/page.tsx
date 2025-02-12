import { Suspense } from 'react';
import DashboardCardList from './_/components/DashboardCardList';
import { DashboardCardsSkeleton } from '@/components/ui/Skeleton';
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
      <div className="w-full">
        <h3 className="text-secondary-900 text-base">مشتریان اخیر</h3>
        <div className="mt-5">
          <Suspense>
            <RecentUsers />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
