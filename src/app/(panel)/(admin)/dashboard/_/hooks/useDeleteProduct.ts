import { deleteProductApi } from '@/services/admin.service';
import { useMutation } from '@tanstack/react-query';

export function useDeleteProduct() {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: deleteProductApi,
  });

  return { mutateAsync, isPending };
}
