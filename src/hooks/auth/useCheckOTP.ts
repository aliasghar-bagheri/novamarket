import { checkOTPApi } from '@/services/auth.service';
import { useMutation } from '@tanstack/react-query';

export const useCheckOTP = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: checkOTPApi,
  });

  return { mutateAsync, isPending };
};
