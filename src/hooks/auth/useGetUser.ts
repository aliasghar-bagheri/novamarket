import { QUERY_KEYS } from '@/lib/tanstack-query/QueryKeys';
import { getUserApi } from '@/services/user.service';
import { useQuery } from '@tanstack/react-query';

export const useGetUser = () => {
  const { data, isPending } = useQuery({
    queryKey: [QUERY_KEYS.GET_USER],
    queryFn: getUserApi,
  });

  return { data, isPending };
};
