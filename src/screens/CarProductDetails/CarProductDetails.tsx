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
import numeral from 'numeral'

import { styles } from './styles'

export function CarProductDetails (): JSX.Element {
  const { productsCard, totalToPaid, completeCheckOut, setRemoveProductCar } = useProductsStore()
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
          handleRemoveProduct={setRemoveProductCar}
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
                  fontSize: 18,
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
                <Text style={{ fontSize: 16, color: 'white' }}>Add first</Text>
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
            <Text style={{ fontSize: 18 }}>Total: {numeral(totalToPaid).format('$0,0')} USD</Text>
          </View>
          <Pressable
          onPress={completeCheckOut}
            disabled={(Number.isNaN(totalToPaid)) || (productsCard.length === 0)}
          style={{
            width: '70%',
            backgroundColor: '#b3cbe3',
            height: 50,
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#fff' }}>Complete order</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}
