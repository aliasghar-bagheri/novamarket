import { QUERY_KEYS } from '@/lib/tanstack-query/QueryKeys';
import { getAllCategoriesApi } from '@/services/category.service';
import { useQuery } from '@tanstack/react-query';

export const useCategories = () => {
  const { data, isPending } = useQuery({
    queryKey: [QUERY_KEYS.GET_ALL_CATEGORIES],
    queryFn: async () => await getAllCategoriesApi(),
  });

  const transformedCategories =
    data && data.length > 0
      ? data.map((category) => ({
          value: category._id,
          label: category.title,
        }))
      : [];

  return { data, transformedCategories, isPending };
};
