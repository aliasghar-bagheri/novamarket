'use client';

import Input from '@/components/ui/Input';
import { Bell, Heart, HomeIcon, MenuIcon, Search } from 'lucide-react';
import Link from 'next/link';
import Logo from '@/components/shared/icons/Logo';
import Button from '@/components/ui/Button';
import { categories, mainNavLinks } from '@/constants/mainNavLinks';
import Auth from '@/components/shared/Auth';
import { useEffect, useState } from 'react';
import Drawer from '@/components/ui/Drawer';
import { usePathname } from 'next/navigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';
import Cart from '@/components/shared/layout/Cart/Cart';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="transition-all">
      <div className="bg-background py-4 md:py-6">
        <div className="container flex items-center justify-center md:justify-between">
          <div className="w-full md:w-auto items-center gap-x-5 flex justify-center flex-wrap gap-3">
            <Logo />
            <div className="relative w-80 flex-1 min-w-60">
              <Input
                type="text"
                placeholder="جستجو محصولات..."
                className="bg-secondary-0 w-full pl-11"
              />
              <Search className="w-5 h-5 absolute top-1/2 -translate-y-1/2 left-4 text-secondary-500" />
            </div>
          </div>
          <div className="hidden md:flex items-center gap-x-5">
            <Heart className="w-5" />
            <Bell className="w-5" />
            <Auth />
          </div>
        </div>
      </div>
      <div className="bg-secondary-0 py-3 sm:py-6">
        <div className="container flex md:hidden items-center justify-between">
          <Button
            variant="outline"
            onClick={() => setIsOpen(true)}
          >
            <MenuIcon />
          </Button>
          <Auth />
        </div>
        <div className="hidden container md:flex items-center justify-between">
          <ul className="flex items-center gap-x-7 transition-colors text-xs font-medium text-secondary-700">
            <li>
              <Link
                href="/products"
                className="hover:text-primary-500"
              >
                همه ی محصولات
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category._id}>
                <Link
                  href={`/products?category=${category.englishTitle}`}
                  className="hover:text-primary-500"
                >
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
          <Cart />
        </div>
      </div>
      <div className="container md:hidden fixed bottom-5">
        <div className="shadow flex items-center bg-secondary-0 py-3 px-4 rounded-2xl justify-between">
          <Cart />

          <div className="flex items-center gap-x-7">
            <Bell
              width={20}
              height={20}
            />
            <HomeIcon
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="flex flex-col gap-y-7 items-center"
      >
        <Logo />
        <Accordion>
          <AccordionItem>
            <AccordionTrigger>دسته بندی ها</AccordionTrigger>
            <AccordionContent>
              <ul className="w-full">
                {categories.map((category) => (
                  <li key={category._id}>
                    <Link
                      href={`/products?category=${category.englishTitle}`}
                      className="text-sm hover:text-primary-500 block py-2"
                    >
                      {category.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <ul className="w-full">
          {mainNavLinks.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-x-3 px-2 py-3 text-sm rounded transition-all my-2 ${
                    isActive ? 'bg-primary-500 text-secondary-0' : 'hover:bg-secondary-100'
                  }`}
                >
                  <Icon />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Drawer>
    </header>
  );
}
