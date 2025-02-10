import { Facebook } from '@/components/shared/icons/Facebook';
import { Instagram } from '@/components/shared/icons/Instagram';
import { Telegram } from '@/components/shared/icons/Telegram';
import { BadgeCheckIcon, ContainerIcon, PackageSearchIcon, WalletIcon } from 'lucide-react';

export const OTP_RESEND_TIME = 90; // 90 second

export const MAIN_SLIDER = [
  {
    src: '/images/slide-1.jpg',
    href: '/products',
  },
  {
    src: '/images/slide-2.jpg',
    href: '/products',
  },
  {
    src: '/images/slide-4.jpg',
    href: '/products',
  },
  {
    src: '/images/slide-3.jpg',
    href: '/products',
  },
];

export const OUR_FEATURES = [
  {
    title: 'تضمین کیفیت',
    subTitle: 'ضمانت برگشت کالا',
    icon: PackageSearchIcon,
  },
  {
    title: 'ارسال رایگان',
    subTitle: 'کالای زیر 2 میلیون',
    icon: ContainerIcon,
  },
  {
    title: 'پرداخت راحت',
    subTitle: 'امکان پرداخت در محل',
    icon: WalletIcon,
  },
  {
    title: 'سرعت',
    subTitle: 'تحویل به موقع',
    icon: BadgeCheckIcon,
  },
];

export const SOCIAL_MEDIA = [
  {
    href: '/',
    label: 'Instagram',
    icon: Instagram,
  },
  {
    href: '/',
    label: 'Telegram',
    icon: Telegram,
  },
  {
    href: '/',
    label: 'Facebook',
    icon: Facebook,
  },
];
