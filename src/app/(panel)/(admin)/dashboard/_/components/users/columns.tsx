import { User } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import { toPersianNumber } from '@/util/toPersianNumber';
import Avatar from '@/components/ui/Avatar';
import { DataTableColumn } from '@/components/ui/DataTable';
import { I_User } from '@/types';
import { convertDateToPersian } from '@/util/convertDateToPersian';

export const userColumns: DataTableColumn<I_User>[] = [
  {
    key: 'avatarUrl',
    label: 'پروفایل',
    render: (user) =>
      user.avatarUrl ? (
        <Avatar
          src={user.avatarUrl}
          alt={user.phoneNumber}
        />
      ) : (
        <User className="bg-primary-500 rounded-full stroke-white w-8 h-8 p-1 shadow-md shadow-primary-500/50" />
      ),
  },
  {
    key: 'name',
    label: 'نام',
    render: (user) => <p>{user.name ?? 'خالی'}</p>,
  },
  {
    key: 'email',
    label: 'ایمیل',
    render: (user) => <p>{user.email ?? 'خالی'}</p>,
  },
  {
    key: 'phoneNumber',
    label: 'شماره تماس',
    render: (user) => <p>{toPersianNumber(user.phoneNumber)}</p>,
  },
  {
    key: 'role',
    label: 'نقش',
    render: (user) => (
      <Badge variant={user.role === 'ADMIN' ? 'primary' : 'secondary'}>
        {user.role === 'ADMIN' ? 'ادمین' : 'کاربر'}
      </Badge>
    ),
  },
  {
    key: 'isVerifiedPhoneNumber',
    label: 'تایید شده',
    render: (user) => (
      <Badge variant={user.isVerifiedPhoneNumber ? 'success' : 'error'}>
        {user.isVerifiedPhoneNumber ? 'بله' : 'خیر'}
      </Badge>
    ),
  },
  {
    key: 'isActive',
    label: 'وضعیت حساب',
    render: (user) => (
      <Badge variant={user.isActive ? 'success' : 'error'}>
        {user.isActive ? 'فعال' : 'غیرفعال'}
      </Badge>
    ),
  },
  {
    key: 'createdAt',
    label: 'تاریخ عضویت',
    render: (user) => <p suppressHydrationWarning>{convertDateToPersian(user.createdAt)}</p>,
  },
];
