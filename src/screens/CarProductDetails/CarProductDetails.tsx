import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  type ListRenderItemInfo,
  Pressable
} from 'react-native'
import React, { useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useProductsStore } from 'src/providers/ProductsStore'
import { useNavigation } from '@react-navigation/native'
import { ProductCard } from '@components'
import { type Product } from '@api'
import { styles } from './styles'

export function CarProductDetails (): JSX.Element {
  const { productsCard } = useProductsStore()
  const navigation = useNavigation()

  function handlePressAddFirst (): void {
    navigation.goBack()
  }

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Product>) => (
      <View style={{ marginBottom: 12 }}>
        <ProductCard
          {...item}
          handleAddToCar={undefined}
          isProductCar
          handleViewDetail={undefined}
        />
      </View>
    ),
    []
  )

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Shopping Car</Text>
        </View>

        <View style={{ marginTop: 20 }}>
          {productsCard.length === 0 && (
            <View
              style={{
                paddingHorizontal: 12,
                alignItems: 'center',
                rowGap: 20
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  fontWeight: '400'
                }}
              >
                Currently you have no products in your cart, add the first one.
              </Text>
              <TouchableOpacity
                onPress={handlePressAddFirst}
                style={{
                  backgroundColor: '#b3cbe3',
                  borderRadius: 12,
                  width: '60%',
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text style={{ fontSize: 18, color: 'white' }}>Add first</Text>
              </TouchableOpacity>
            </View>
          )}

          <FlatList
            data={productsCard}
            renderItem={renderItem}
            keyExtractor={(item) => String(item.id)}
            contentContainerStyle={{
              flexGrow: 1,
              alignItems: 'center',
              paddingBottom: 140
            }}
          />
        </View>
        <View style={styles.footer}>
          <View>
            <Text>Product List: {productsCard.length}</Text>
          </View>
          <Pressable>
            <Text>Complete order</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}
