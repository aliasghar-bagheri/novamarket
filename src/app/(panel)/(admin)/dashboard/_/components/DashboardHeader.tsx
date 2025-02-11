'use client';

import Button from '@/components/ui/Button';
import Drawer from '@/components/ui/Drawer';
import { Bell, MenuIcon, User } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';

export default function DashboardHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 left-0 bg-secondary-0 flex w-full p-6 items-center justify-between">
      <div className="flex items-center gap-x-2">
        <Button
          onClick={() => setIsOpen(true)}
          type="button"
          variant="outline"
          className="p-3 lg:!hidden"
        >
          <MenuIcon />
        </Button>
      </div>
      <div className="flex items-center gap-x-3">
        <Bell />
        <div className="bg-secondary-0 p-3 rounded-3xl flex items-center gap-x-3 text-sm">
          <User className="bg-primary-500 rounded-full stroke-white w-8 h-8 p-1 shadow-md shadow-primary-500/50" />
        </div>
      </div>
      <Drawer
        className="block lg:hidden"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Sidebar />
      </Drawer>
    </header>
  );
}
