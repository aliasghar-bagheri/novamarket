'use client';

import { signOutApi } from '@/services/auth.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useSignOut = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, error } = useMutation({
    mutationFn: signOutApi,
    onSuccess: () => queryClient.invalidateQueries(),
  });

  return { mutateAsync, isPending, error };
};
