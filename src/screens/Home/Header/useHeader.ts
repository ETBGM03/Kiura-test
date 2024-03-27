import { queryCategoriesProduct } from '@api'
import { useQuery } from '@tanstack/react-query'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useHeader () {
  const restCategories = useQuery<string[]>({
    queryKey: ['product-categories'],
    queryFn: async ({ signal }) => await queryCategoriesProduct(signal)
  })

  return { ...restCategories }
}
