import Badge from '@/components/ui/Badge';
import { toPersianNumber } from '@/util/toPersianNumber';
import Avatar from '@/components/ui/Avatar';
import { DataTableColumn } from '@/components/ui/DataTable';
import { I_Product } from '@/types';
import { convertDateToPersian } from '@/util/convertDateToPersian';

export const recentProductColumns: DataTableColumn<I_Product>[] = [
  {
    key: 'imageLink',
    label: 'محصول',
    render: (product) => (
      <Avatar
        src={product.imageLink}
        alt={product.title}
      />
    ),
  },
  {
    key: 'title',
    label: 'نام محصول',
    render: (product) => (
      <p className="truncate line-clamp-1 max-w-96 font-medium">{product.title}</p>
    ),
  },
  {
    key: 'countInStock',
    label: 'موجودی',
    render: (product) => (
      <Badge
        variant={
          product.countInStock < 4 ? 'error' : product.countInStock < 10 ? 'warning' : 'success'
        }
      >
        {toPersianNumber(product.countInStock)}
      </Badge>
    ),
  },
  {
    key: 'brand',
    label: 'برند',
    render: (product) => <p className="font-medium">{product.brand}</p>,
  },
  {
    key: 'category',
    label: 'دسته بندی',
    render: (product) => <Badge variant="primary">{product.category.title}</Badge>,
  },
  {
    key: 'price',
    label: 'قیمت',
    render: (product) => <p>{toPersianNumber(product.price)} هزارتومان</p>,
  },
  {
    key: 'offPrice',
    label: 'قیمت تخفیف خورده',
    render: (product) => <p>{toPersianNumber(product.offPrice)} هزارتومان</p>,
  },
  {
    key: 'createdAt',
    label: 'تاریخ ایجاد',
    render: (product) => <p suppressHydrationWarning>{convertDateToPersian(product.createdAt)}</p>,
  },
  {
    key: 'updatedAt',
    label: 'تاریخ بروزرسانی',
    render: (product) => <p suppressHydrationWarning>{convertDateToPersian(product.createdAt)}</p>,
  },
];
