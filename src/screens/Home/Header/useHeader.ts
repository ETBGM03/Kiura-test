import { queryCategoriesProduct } from "@api";
import { useQuery } from "@tanstack/react-query";

export function useHeader() {
  const restCategories = useQuery<string[]>({
    queryKey: ["product-categories"],
    queryFn: ({ signal }) => queryCategoriesProduct(signal!),
  });

  return { ...restCategories };
}
