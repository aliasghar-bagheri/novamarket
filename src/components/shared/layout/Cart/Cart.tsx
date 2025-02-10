'use client';

import Button from '@/components/ui/Button';
import { useGetUser } from '@/hooks/auth/useGetUser';
import { toPersianNumber } from '@/util/toPersianNumber';
import { ShoppingBagIcon } from 'lucide-react';
import Link from 'next/link';

export default function Cart() {
  const { data, isPending } = useGetUser();

  return (
    <Link href="/cart">
      <Button
        variant="primary"
        className="p-2 md:py-3 px-4"
      >
        <span className="hidden md:block">
          {isPending ? (
            <div className="w-4 h-5 rounded-xl animate-pulse bg-secondary-300"></div>
          ) : (
            toPersianNumber(data ? data.cart.productDetail.length : 0)
          )}
        </span>
        <p className="block md:hidden">سبد خرید</p>
        <ShoppingBagIcon />
      </Button>
    </Link>
  );
}
