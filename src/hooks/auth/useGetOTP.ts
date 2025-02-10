import { getOTPApi } from '@/services/auth.service';
import { useMutation } from '@tanstack/react-query';

export const useGetOTP = () => {
  const { data, mutateAsync, isPending } = useMutation({
    mutationFn: getOTPApi,
  });

  return { data, mutateAsync, isPending };
};
