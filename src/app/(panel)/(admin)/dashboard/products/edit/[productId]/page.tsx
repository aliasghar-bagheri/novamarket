import { Metadata } from 'next';
import ProductForm from '../../_/components/ProductForm';
import { getProductById } from '@/services/product.service';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: { absolute: 'صفحه ی ویرایش محصول' },
};

export default async function ProductEditPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  const product = await getProductById(productId);

  if (!product) return notFound();

  return (
    <div className="w-full space-y-10">
      <h2 className="text-secondary-900 font-medium text-xl">ویرایش محصول</h2>
      <div>
        <ProductForm initialData={product} />
      </div>
    </div>
  );
}
