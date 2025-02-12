'use client';

import Button from '@/components/ui/Button';
import Dialog from '@/components/ui/Modal';
import { Trash2Icon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDeleteProduct } from '../../hooks/useDeleteProduct';
import { handleError } from '@/util/handleError';
import { toast } from 'sonner';

export default function DeleteProduct({ _id, title }: { _id: string; title: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const { mutateAsync: deleteProduct, isPending: isDeleting } = useDeleteProduct();

  const handleDeleteProduct = async (productId: string) => {
    try {
      const { message } = await deleteProduct(productId);

      toast.success(message);
      router.refresh();
    } catch (error) {
      const message = handleError(error);
      toast.error(message);
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant="danger"
        className="p-2"
      >
        <Trash2Icon />
      </Button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title="آیا مطمئن هستید؟"
      >
        <div className="space-y-6">
          <p className="text-sm sm:text-base text-secondary-600">
            آیا مطمئن هستید که میخواهید محصول
            <q className="text-secondary-900 font-medium">{title}</q> را حذف کنید؟
          </p>
          <span className="text-error text-xs sm:text-sm">
            با انجام این کار این محصول به صورت کامل حذف میشود و امکان بازیابی آن وجود ندارد.
          </span>
          <div className="w-full flex items-center gap-x-5">
            <Button
              onClick={() => setIsOpen(false)}
              className="flex-1"
              variant="secondary"
            >
              لغو
            </Button>
            <Button
              onClick={() => handleDeleteProduct(_id)}
              variant="danger"
              disabled={isDeleting}
              isLoading={isDeleting}
              className="flex-1"
            >
              حذف
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
