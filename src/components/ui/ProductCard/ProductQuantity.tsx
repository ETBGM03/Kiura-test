import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useProductsStore } from 'src/providers/ProductsStore'
import { type ProductQuantityProps } from './types'
import numeral from 'numeral'
import { styles } from './styles'

export const ProductQuantity = ({
  quantity,
  productId,
  price
}: ProductQuantityProps): JSX.Element => {
  const { setDecreaseProductQuantity, setIncreaseProductQuantity } =
    useProductsStore()

  return (
    <View>
      <View>
        <Text>{numeral(price).format('$0,0')}</Text>
      </View>
      <View style={styles.containerQuantity}>
        <TouchableOpacity
          onPress={() => {
            setDecreaseProductQuantity(productId)
          }}
          style={styles.buttonQuantity}
        >
          <Text style={styles.buttonTextQuantity}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity
          onPress={() => {
            setIncreaseProductQuantity(productId)
          }}
          style={styles.buttonQuantity}
        >
          <Text style={styles.buttonTextQuantity}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
