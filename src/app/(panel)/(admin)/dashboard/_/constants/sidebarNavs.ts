import {
  LayoutDashboardIcon,
  Package2Icon,
  SettingsIcon,
  ShoppingCartIcon,
  SquareStackIcon,
  TicketPercentIcon,
  UsersRoundIcon,
} from 'lucide-react';

export const dashboardSidebarNavs = [
  {
    label: 'داشبورد',
    href: '/dashboard',
    icon: LayoutDashboardIcon,
  },
  {
    label: 'مشتری ها',
    href: '/dashboard/customers',
    icon: UsersRoundIcon,
  },
  {
    label: 'محصولات',
    href: '/dashboard/products',
    icon: ShoppingCartIcon,
  },
  {
    label: 'دسته بندی ها',
    href: '/dashboard/categories',
    icon: SquareStackIcon,
  },
  {
    label: 'سفارشات',
    href: '/dashboard/payments',
    icon: Package2Icon,
  },
  {
    label: 'تخفیف ها',
    href: '/dashboard/discounts',
    icon: TicketPercentIcon,
  },
  {
    label: 'تنظیمات',
    href: '/dashboard/settings',
    icon: SettingsIcon,
  },
];
