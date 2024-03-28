import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { type ProductDetailProps } from './types'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useProductsStore } from 'src/providers/ProductsStore'

export function ProductDetail (props: ProductDetailProps): JSX.Element {
  const { params } = props.route
  const { setAddNewProductCar } = useProductsStore()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <View>
            <View style={{ width: '100%', height: 240 }}>
              <Image
                source={{ uri: params.images[0] }}
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
              />
            </View>

            <View style={{ paddingHorizontal: 16 }}>
              <Text style={{ fontSize: 28, fontWeight: '400' }}>
                {params.title}
              </Text>
              <Text style={{ fontSize: 16, fontWeight: '300' }}>
                {params.description}
              </Text>
              <View style={{ flexDirection: 'row', columnGap: 8 }}>
                <Text style={{ fontSize: 16, fontWeight: '300' }}>
                  ${params.price}
                </Text>
              </View>
            </View>
          </View>

          <View style={{ alignItems: 'center', rowGap: 12, marginBottom: 12 }}>
            <TouchableOpacity
            onPress={() => { setAddNewProductCar(params) }}
              style={{
                width: '90%',
                height: 54,
                justifyContent: 'center',
                backgroundColor: '#b3cbe3',
                borderRadius: 8
              }}
            >
              <Text style={{ textAlign: 'center', fontSize: 16 }}>
                Add to car
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
