import Button from '@/components/ui/Button';
import { toPersianNumber } from '@/util/toPersianNumber';
import { ShoppingBagIcon } from 'lucide-react';

export default function Cart() {
  return (
    <Button
      variant="primary"
      className="p-2 md:py-3 px-4"
    >
      <span className="hidden md:block">{toPersianNumber(0)}</span>
      <p className="block md:hidden">سبد خرید</p>
      <ShoppingBagIcon />
    </Button>
  );
}
