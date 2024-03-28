import { View, Text, FlatList, type ListRenderItemInfo } from 'react-native'
import React, { useCallback } from 'react'
import { type Product } from '@api'
import { ProductCard } from '@components'
import { type ProductFilteredProps } from './types'
import { styles } from './styles'

export function ProductsFiltered ({
  searchQuery,
  dataProductsSearchedMemo,
  handleAddToCar, handleViewDetail
}: ProductFilteredProps): JSX.Element {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Product>) => (
      <ProductCard
        {...item}
        handleViewDetail={handleViewDetail}
        handleAddToCar={handleAddToCar}
        key={`product_card_${item.id}`}
      />
    ),
    [handleAddToCar, handleViewDetail]
  )

  return (
    <View style={styles.container}>
      <Text style={styles.titleSection}>Products filtered by {searchQuery}</Text>

      <FlatList
        data={dataProductsSearchedMemo}
        horizontal
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}
