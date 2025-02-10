'use client';

import { useGetUser } from '@/hooks/auth/useGetUser';
import { User } from 'lucide-react';
import Link from 'next/link';
import { CircleSkeleton } from '../ui/Skeleton';

export default function Auth() {
  const { data, isPending } = useGetUser();

  return (
    <>
      {isPending ? (
        <CircleSkeleton />
      ) : (
        <Link
          href={data ? (data.user.role === 'ADMIN' ? '/dashboard' : '/profile') : '/auth'}
          className="bg-secondary-0 p-3 rounded-3xl flex items-center gap-x-3 text-sm"
        >
          {!data && 'ورود و عضویت'}
          <User className="bg-primary-500 rounded-full stroke-white w-8 h-8 p-1 shadow-md shadow-primary-500/50" />
        </Link>
      )}
    </>
  );
}
