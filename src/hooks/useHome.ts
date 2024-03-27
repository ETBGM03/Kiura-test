import { type Product, queryAllProducts } from '@api'
import {
  ROUTES,
  type NavigationProps as CustomNavigationProps
} from '@navigation'
import { type NavigationProp, useNavigation } from '@react-navigation/native'
import { useQuery } from '@tanstack/react-query'
import { useCallback, useMemo } from 'react'
import { useProductsStore } from 'src/providers/ProductsStore'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useHome () {
  const { category } = useProductsStore()
  const navigation = useNavigation<NavigationProp<CustomNavigationProps>>()

  const rest = useQuery<{ products: Product[], total: number }>({
    queryKey: ['products'],
    queryFn: async ({ signal }) => await queryAllProducts(signal)
  })

  const handleViewDetail = useCallback((props: Product) => {
    navigation.navigate(ROUTES.PRODUCT_DETAIL, { ...props })
  }, [])

  const dataProductsMemo = useMemo(() => {
    if (category !== '') {
      return rest.data?.products?.filter(product => product.category === category) ?? []
    }

    return rest.data?.products
  }, [category, rest.data])

  console.log('first', category)

  return { ...rest, handleViewDetail, dataProductsMemo }
}
