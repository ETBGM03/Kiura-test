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
import { type HeaderProps } from './types'
import { styles } from './styles'

export function HeaderComponent ({ categories }: HeaderProps): JSX.Element {
  const { category, setCategory, setSearchQuery, searchQuery } = useProductsStore()
  const navigation =
    useNavigation<NavigationProp<AppStackNavigatorParamList>>()

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
        style={[
          styles.containerCategory,
          { backgroundColor: category === item ? '#becbec' : '#fff' }
        ]}
        onPress={handleOnPress(item)}
      >
        <Text style={styles.textCategory}>{item}</Text>
      </TouchableOpacity>
    ),
    [category]
  )

  return (
    <View style={styles.spacerTop}>
      <View style={styles.header}>
        <View style={styles.containerSearch}>
          <Pressable style={{ marginHorizontal: 6 }}>
            <AntDesign name="search1" size={24} color="black" />
          </Pressable>
          <TextInput onChangeText={setSearchQuery} defaultValue={searchQuery} style={styles.inputSearch} placeholder="Search products" />
        </View>
        <Pressable onPress={handlePressCarDetail} style={styles.shopping}>
          <AntDesign name="shoppingcart" size={24} color="black" />
        </Pressable>
      </View>
      <View style={styles.contentCategory}>
        <Text style={styles.titleSection}>Categories</Text>
        <FlatList<string>
          data={categories ?? []}
          renderItem={renderItemCategory}
          horizontal
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>
    </View>
  )
}
