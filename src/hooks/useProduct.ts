import { createProductApi } from '@/services/admin.service';
import { useMutation } from '@tanstack/react-query';

export const useCreateProduct = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: createProductApi,
  });

  return { mutateAsync, isPending };
};
