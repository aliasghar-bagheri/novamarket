import { toPersianNumber } from '@/util/toPersianNumber';
import clsx from 'clsx';
import {
  HeartIcon,
  LucideIcon,
  Package2Icon,
  ShoppingCartIcon,
  SquareStackIcon,
  UsersRoundIcon,
} from 'lucide-react';

export type TDashboardCard = 'users' | 'orders' | 'products' | 'categories' | 'favorits';

interface DashboardCardProps {
  type: TDashboardCard;
  value: number | `${number}`;
}

const dashboardCardVariants: Record<
  TDashboardCard,
  { styles: string; Icon: LucideIcon; label: string }
> = {
  users: {
    styles: 'bg-primary-100/50 backdrop-blur text-primary-500 dark:bg-primary-800/50',
    Icon: UsersRoundIcon,
    label: 'کاربران',
  },
  orders: {
    styles: 'bg-green-100/50 backdrop-blur text-green-500 dark:bg-green-800/50',
    Icon: Package2Icon,
    label: 'سفارشات',
  },
  products: {
    styles: 'bg-indigo-100/50 backdrop-blur text-indigo-500 dark:bg-indigo-800/50',
    Icon: ShoppingCartIcon,
    label: 'محصولات',
  },
  categories: {
    styles: 'bg-orange-100/50 backdrop-blur text-orange-500 dark:bg-orange-800/50',
    Icon: SquareStackIcon,
    label: 'دسته بندی ها',
  },
  favorits: {
    styles: 'bg-red-100/50 backdrop-blur text-red-500 dark:bg-red-800/50',
    Icon: HeartIcon,
    label: 'علاقه مندی ها',
  },
};

export default function DashboardCard({ type, value }: DashboardCardProps) {
  const { styles, Icon, label } = dashboardCardVariants[type];
  const cardValue = toPersianNumber(value);

  return (
    <div className="p-6 flex-1 w-full min-w-48 sm:min-w-64 max-w-64 rounded-3xl bg-secondary-0 shadow flex items-start justify-between">
      <div>
        <p className="text-secondary-500 text-sm text-nowrap">{label}</p>
        <h4 className="pr-2 text-secondary-900 font-bold text-2xl mt-2">{cardValue}</h4>
      </div>
      <div className={clsx('p-4 rounded-3xl', styles)}>
        <Icon size={30} />
      </div>
    </div>
  );
}
