import Footer from '@/components/shared/layout/Footer/Footer';
import Header from '@/components/shared/layout/Header/Header';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="container min-h-screen py-8">{children}</main>
      <Footer />
    </>
  );
}
