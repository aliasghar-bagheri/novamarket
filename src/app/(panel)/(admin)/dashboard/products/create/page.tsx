import { Metadata } from 'next';
import ProductForm from '../_/components/ProductForm';

export const metadata: Metadata = {
  title: { absolute: 'صفحه ی ایجاد محصول' },
};

export default function ProductCreatePage() {
  return (
    <div className="w-full space-y-10">
      <h2 className="text-secondary-900 font-medium text-xl">ایجاد محصول</h2>
      <div>
        <ProductForm />
      </div>
    </div>
  );
}
