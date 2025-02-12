'use client';

import clsx from 'clsx';

interface Skeleton {
  className?: string;
  type?: 'wave' | 'pulse';
  count?: number;
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

export function DashboardCardsSkeleton({ className, type = 'wave', count = 4 }: Skeleton) {
  return (
    <div className="container flex flex-wrap justify-center gap-5 py-10">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={clsx(
            'h-28 flex-1 w-full min-w-48 sm:min-w-64 max-w-64 rounded-3xl relative overflow-hidden bg-secondary-200',
            className,
            {
              'skeleton-wave': type === 'wave',
              'animate-pulse ': type === 'pulse',
            }
          )}
        />
      ))}
    </div>
  );
}

export function TableSkeleton({ className, type = 'wave' }: Skeleton) {
  return (
    <div className="w-full">
      <div className="w-full bg-secondary-0 py-6 rounded-t border border-secondary-200" />
      <div
        className={clsx(
          'h-28 flex-1 w-full relative rounded-b overflow-hidden bg-secondary-200',
          className,
          {
            'skeleton-wave': type === 'wave',
            'animate-pulse ': type === 'pulse',
          }
        )}
      />
    </div>
  );
}
