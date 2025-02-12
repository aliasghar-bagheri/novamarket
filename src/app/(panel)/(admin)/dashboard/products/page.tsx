import { TableSkeleton } from '@/components/ui/Skeleton';
import { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { PlusIcon } from 'lucide-react';
import ProductsTable from '../_/components/products/ProductsTable';

export const metadata: Metadata = {
  title: {
    absolute: 'لیست محصولات',
  },
};

export default function ProductsPage() {
  return (
    <div className="w-full space-y-10">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-secondary-900 font-medium text-xl">لیست محصولات</h2>
          <Link href="/dashboard/products/create">
            <Button variant="primary">
              <PlusIcon /> افزودن
            </Button>
          </Link>
        </div>
        <div className="mt-5">
          <Suspense fallback={<TableSkeleton />}>
            <ProductsTable />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
