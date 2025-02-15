import { createProductApi, updateProductApi } from '@/services/admin.service';
import { useMutation } from '@tanstack/react-query';

export const useCreateProduct = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: createProductApi,
  });

  return { mutateAsync, isPending };
};

export const useUpdateProduct = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: updateProductApi,
  });

  return { mutateAsync, isPending };
};
