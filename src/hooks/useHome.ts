import { type Product, queryAllProducts, queryProductsBySearch } from '@api'
import {
  ROUTES,
  type AppStackNavigatorParamList
} from '@navigation'
import { type NavigationProp, useNavigation } from '@react-navigation/native'
import { useQuery } from '@tanstack/react-query'
import { useCallback, useEffect, useMemo } from 'react'
import debounce from 'lodash.debounce'

import { useProductsStore } from 'src/providers/ProductsStore'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useHome () {
  const { category } = useProductsStore()
  const navigation = useNavigation<NavigationProp<AppStackNavigatorParamList>>()
  const { searchQuery } = useProductsStore()

  const rest = useQuery<{ products: Product[], total: number }>({
    queryKey: ['products'],
    queryFn: async ({ signal }) => await queryAllProducts(signal),
    refetchOnReconnect: true
  })

  const restProductsSearch = useQuery<{ products: Product[], total: number }>({
    queryKey: ['products-searched'],
    queryFn: async ({ signal }) => await queryProductsBySearch(signal, searchQuery),
    refetchOnReconnect: true,
    enabled: false
  })

  const debouncedRefetch = debounce(async () => {
    if (searchQuery !== undefined && searchQuery !== null) {
      await restProductsSearch.refetch()
    }
  }, 200)

  useEffect(() => {
    debouncedRefetch()

    return () => {
      debouncedRefetch.cancel()
    }
  }, [searchQuery])

  const handleViewDetail = useCallback((props: Product) => {
    navigation.navigate(ROUTES.PRODUCT_DETAIL, { ...props })
  }, [])

  const dataProductsMemo = useMemo(() => {
    if (category !== '') {
      return rest.data?.products?.filter(product => product.category === category) ?? []
    }

    return rest.data?.products.map(product => ({ ...product, quantity: 0 }))
  }, [category, rest.data])

  const dataProductsSearchedMemo = useMemo(() => {
    if (searchQuery === '') return []
    return restProductsSearch.data?.products.map(product => ({ ...product, quantity: 0 }))
  }, [searchQuery, restProductsSearch.data])

  return { ...rest, handleViewDetail, dataProductsMemo, dataProductsSearchedMemo }
}
