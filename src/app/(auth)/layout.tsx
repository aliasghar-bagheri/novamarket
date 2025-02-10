import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <section className="w-full p-5 sm:p-8 min-h-screen flex items-center justify-center">
      {children}
    </section>
  );
}
