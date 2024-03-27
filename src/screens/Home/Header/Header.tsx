import { View, Text, type ListRenderItemInfo, FlatList, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
import { useHeader } from './useHeader'
import { useProductsStore } from 'src/providers/ProductsStore'

export function HeaderComponent (): JSX.Element {
  const { data } = useHeader()
  const { category, setCategory } = useProductsStore()

  console.log({ category })

  const handleOnPress = (categoryParam: string) => () => {
    if (category === categoryParam) {
      setCategory('')

      return
    }

    setCategory(categoryParam)
  }

  const renderItemCategory = useCallback(
    ({ item }: ListRenderItemInfo<string>) => (
      <TouchableOpacity
      activeOpacity={0.5}
        style={{
          backgroundColor: category === item ? 'pink' : '#fff',
          borderRadius: 6,
          maxHeight: 30,
          paddingVertical: 6,
          paddingHorizontal: 16
        }}
        onPress={handleOnPress(item)}
      >
        <Text
          style={{
            color: '#000',
            fontWeight: '500',
            textTransform: 'capitalize',
            alignSelf: 'flex-start',
            borderRadius: 12
          }}
        >
          {item}
        </Text>
      </TouchableOpacity>
    ),
    [category]
  )

  return (
    <View style={{ height: 100 }}>
      <Text>Categories</Text>
      <FlatList<string>
        data={data ?? []}
        renderItem={renderItemCategory}
        horizontal
        contentContainerStyle={{ columnGap: 20, alignSelf: 'center' }}
      />
    </View>
  )
}
