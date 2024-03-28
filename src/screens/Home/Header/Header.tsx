import {
  View,
  Text,
  type ListRenderItemInfo,
  FlatList,
  TouchableOpacity,
  TextInput,
  Pressable
} from 'react-native'
import React, { useCallback } from 'react'
import { useProductsStore } from 'src/providers/ProductsStore'
import { AntDesign } from '@expo/vector-icons'

export function HeaderComponent ({
  categories
}: {
  categories: string[]
}): JSX.Element {
  const { category, setCategory } = useProductsStore()

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
          maxHeight: 50,
          paddingVertical: 6,
          paddingHorizontal: 16
        }}
        onPress={handleOnPress(item)}
      >
        <Text
          style={{
            color: '#000',
            fontWeight: '400',
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
    <View style={{ marginTop: 20 }}>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: 12
        }}
      >
        <TextInput
          style={{
            height: 28,
            flex: 1,
            fontSize: 16,
            marginVertical: 12,
            backgroundColor: '#fff',
            borderRadius: 12,
            paddingHorizontal: 8
          }}
          placeholder="Search products"
        />
        <Pressable style={{ marginHorizontal: 12 }}>
          <AntDesign name="search1" size={24} color="black" />
        </Pressable>
      </View>
      <View style={{ marginVertical: 12, height: 80 }}>
        <Text style={{ fontWeight: '500' }}>Categories</Text>
        <FlatList<string>
          data={categories ?? []}
          renderItem={renderItemCategory}
          horizontal
          contentContainerStyle={{ columnGap: 20, alignSelf: 'center' }}
        />
      </View>
    </View>
  )
}
