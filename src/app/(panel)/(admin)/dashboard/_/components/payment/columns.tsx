import Badge, { BadgeProps } from '@/components/ui/Badge';
import { toPersianNumber } from '@/util/toPersianNumber';
import { DataTableColumn } from '@/components/ui/DataTable';
import { E_PaymnetType, I_Payment } from '@/types';
import { convertDateToPersian } from '@/util/convertDateToPersian';

export const recentPaymentColumns: DataTableColumn<I_Payment>[] = [
  {
    key: 'invoiceNumber',
    label: 'شماره فاکتور',
    render: (payment) => <p>{toPersianNumber(payment.invoiceNumber)}</p>,
  },
  {
    key: 'user',
    label: 'مشتری',
    render: (payment) => <p>{payment.user.name ?? 'خالی'}</p>,
  },
  {
    key: 'paymentMethod',
    label: 'شماره تماس',
    render: (payment) => <p>{toPersianNumber(payment.user.phoneNumber)}</p>,
  },
  {
    key: 'amount',
    label: 'مقدار',
    render: (payment) => <p>{toPersianNumber(payment.amount)} تومان</p>,
  },
  {
    key: 'status',
    label: 'وضعیت',
    render: (payment) => {
      const status =
        payment.status === E_PaymnetType.COMPLETED
          ? { label: 'تکمیل شده', variant: 'success' }
          : payment.status === E_PaymnetType.UNCOMPLETED
          ? { label: 'تکمیل نشده', variant: 'error' }
          : { label: 'درحال انجام', variant: 'warning' };
      return <Badge variant={status.variant as BadgeProps['variant']}>{status.label}</Badge>;
    },
  },
  {
    key: 'createdAt',
    label: 'تاریخ خرید',
    render: (payment) => <p suppressHydrationWarning>{convertDateToPersian(payment.createdAt)}</p>,
  },
];
