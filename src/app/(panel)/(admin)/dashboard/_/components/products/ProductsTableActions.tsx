import Button from '@/components/ui/Button';
import { I_Product } from '@/types';
import { PenIcon } from 'lucide-react';
import Link from 'next/link';
import DeleteProduct from './DeleteProduct';

export default function ProductsTableActions({ product }: { product: I_Product }) {
  return (
    <div className="flex items-center gap-x-3">
      <Link href={`/dashboard/products/edit/${product._id}`}>
        <Button
          variant="outline"
          className="p-2"
        >
          <PenIcon />
        </Button>
      </Link>
      <DeleteProduct
        _id={product._id}
        title={product.title}
      />
    </div>
  );
}
