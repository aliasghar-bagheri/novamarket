import { Suspense } from 'react';
import DashboardCardList from './_/components/DashboardCardList';
import { DashboardCardsSkeleton } from '@/components/ui/Skeleton';
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
    </div>
  );
}
