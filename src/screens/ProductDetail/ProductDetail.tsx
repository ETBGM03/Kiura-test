import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { type ProductDetailProps } from './types'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useProductsStore } from 'src/providers/ProductsStore'
import { styles } from './style'

export function ProductDetail (props: ProductDetailProps): JSX.Element {
  const { params } = props.route
  const { setAddNewProductCar } = useProductsStore()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.content}>
          <View>
            <View style={styles.contentImage}>
              <Image
                source={{ uri: params.images[0] }}
                style={styles.image}
                resizeMode="cover"
              />
            </View>

            <View style={{ paddingHorizontal: 16 }}>
              <Text style={styles.title}>{params.title}</Text>
              <Text style={styles.subtitle}>{params.description}</Text>
              <View style={{ flexDirection: 'row', columnGap: 8 }}>
                <Text style={styles.subtitle}>${params.price}</Text>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity
              onPress={() => {
                setAddNewProductCar(params)
              }}
              style={styles.btnAddCar}
            >
              <Text style={styles.textAddCar}>Add to car</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
