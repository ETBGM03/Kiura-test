import { organizeDataByCategory } from '@helpers'
import { type RenderProductProps } from './types'
import { type ListRenderItemInfo, View, Text, FlatList } from 'react-native'
import { type Product } from '@api'
import React, { useCallback } from 'react'
import { ProductCard } from '@components'

export function RenderProducts ({
  products,
  handleViewDetail,
  handleAddToCar
}: RenderProductProps): JSX.Element {
  const productsByCategories = organizeDataByCategory(products)

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Product>) => (
      <ProductCard
        {...item}
        handleViewDetail={handleViewDetail}
        handleAddToCar={handleAddToCar}
        key={`product_card_${item.id}`}
      />
    ),
    [handleViewDetail]
  )

  return (
    <View>
      {Object.keys(productsByCategories).map((category) => (
        <View key={category} style={{ marginBottom: 20 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginVertical: 8,
              textTransform: 'capitalize'
            }}
          >
            {category}
          </Text>
          <FlatList
            horizontal
            data={productsByCategories[category]}
            ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      ))}
    </View>
  )
}
