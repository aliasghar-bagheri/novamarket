import { Heart, Laptop, PhoneCallIcon, TicketPercentIcon } from 'lucide-react';

export const categories = [
  {
    _id: '67a64083979eb45d3cd4aaac',
    title: 'کالا های دیجیتال',
    englishTitle: 'electronic-devices',
  },
  {
    _id: '67a64193979eb45d3cd4aab7',
    title: 'لپ تاپ',
    englishTitle: 'laptop',
  },
  {
    _id: '67a641a3979eb45d3cd4aabc',
    title: 'موبایل',
    englishTitle: 'mobile',
  },
  {
    _id: '67a641bf979eb45d3cd4aac1',
    title: 'هدفون',
    englishTitle: 'headphone',
  },
  {
    _id: '67a641f4979eb45d3cd4aac6',
    title: 'لوازم موبایل',
    englishTitle: 'mobile-accessories',
  },
];

export const mainNavLinks = [
  {
    label: 'محصولات',
    href: '/products',
    icon: Laptop,
  },
  {
    label: 'علاقه مندی ها',
    href: '/#favorite',
    icon: Heart,
  },
  {
    label: 'پشتیبانی',
    href: '/support',
    icon: TicketPercentIcon,
  },
  {
    label: 'تماس با ما',
    href: '/contact-us',
    icon: PhoneCallIcon,
  },
];
