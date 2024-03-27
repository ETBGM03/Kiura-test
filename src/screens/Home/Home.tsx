import { FlatList, type ListRenderItemInfo } from 'react-native'
import React, { useCallback } from 'react'
import { useHome } from '@hooks'
import { type Product } from '@api'
import { HomeLayout, ProductCard } from '@components'

import { styles } from './styles'
import { Loader } from './Loader'
import { HeaderComponent } from './Header'

export function HomeScreen (): JSX.Element {
  const { isLoading, handleViewDetail, dataProductsMemo } = useHome()

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Product>) => (
      <ProductCard
        {...item}
        handleViewDetail={handleViewDetail}
        key={`product_card_${item.id}`}
      />
    ),
    [handleViewDetail]
  )

  if (isLoading) {
    return <Loader />
  }

  return (
    <HomeLayout>
      <FlatList<Product>
        data={dataProductsMemo ?? []}
        ListHeaderComponent={HeaderComponent}
        renderItem={renderItem}
        keyExtractor={({ id }) => String(id)}
        contentContainerStyle={styles.separator}
        showsVerticalScrollIndicator={false}
      />
    </HomeLayout>
  )
}
