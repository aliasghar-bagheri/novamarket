import { ReactNode } from 'react';
import Sidebar from './_/components/Sidebar';
import DashboardHeader from './_/components/DashboardHeader';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-secondary-0 grid grid-cols-12 overflow-hidden">
      <aside className="hidden md:col-span-3 lg:col-span-3 xl:col-span-2 lg:block h-screen overflow-y-auto p-5">
        <Sidebar />
      </aside>
      <div className="flex-1 col-span-full lg:col-span-9 xl:col-span-10 h-screen flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-4 sm:p-7 overflow-y-auto bg-background border border-secondary-100 lg:rounded-tr-3xl lg:drop-shadow-xl lg:shadow-primary-200">
          {children}
        </main>
      </div>
    </div>
  );
}
