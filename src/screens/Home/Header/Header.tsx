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
import { type NavigationProp, useNavigation } from '@react-navigation/native'
import { ROUTES, type AppStackNavigatorParamList } from '@navigation'

export function HeaderComponent ({
  categories
}: {
  categories: string[]
}): JSX.Element {
  const { category, setCategory } = useProductsStore()
  const navigation = useNavigation<NavigationProp<AppStackNavigatorParamList>>()

  const handleOnPress = (categoryParam: string) => () => {
    if (category === categoryParam) {
      setCategory('')

      return
    }

    setCategory(categoryParam)
  }

  function handlePressCarDetail (): void {
    navigation.navigate(ROUTES.PRODUCT_CAR_DETAILS)
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
          alignItems: 'center'
        }}
      >
        <View
          style={{
            backgroundColor: '#fff',
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 12
          }}
        >
          <Pressable style={{ marginHorizontal: 6 }}>
            <AntDesign name="search1" size={24} color="black" />
          </Pressable>
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
        </View>
        <Pressable onPress={handlePressCarDetail} style={{ marginHorizontal: 14 }}>
          <AntDesign name="shoppingcart" size={24} color="black" />
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
