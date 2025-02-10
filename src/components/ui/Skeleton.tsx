'use client';

import clsx from 'clsx';

interface Skeleton {
  className?: string;
  type?: 'wave' | 'pulse';
}

export function CircleSkeleton({ className, type = 'wave' }: Skeleton) {
  return (
    <div
      className={clsx('relative w-14 h-14 rounded-full overflow-hidden', className, {
        'skeleton-wave': type === 'wave',
        'animate-pulse ': type === 'pulse',
      })}
    />
  );
}
