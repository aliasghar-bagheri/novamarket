'use client';

import Logo from '@/components/shared/icons/Logo';
import { dashboardSidebarNavs } from '../constants/sidebarNavs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import SignOut from '@/app/(panel)/_/components/SignOut';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col items-center w-full">
      <Logo />

      <div className="w-full h-full py-8 overflow-y-auto">
        <ul>
          {dashboardSidebarNavs.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx('flex items-center gap-x-3 mb-3 p-3 rounded transition-all', {
                    'border-r-4 border-r-primary-500 text-primary-500 pr-5': isActive,
                    'hover:border-r-4 hover:border-r-secondary-500 hover:text-secondary-500':
                      !isActive,
                  })}
                >
                  <Icon />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <SignOut />
    </div>
  );
}
