import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useProductsStore } from 'src/providers/ProductsStore'

export const ProductQuantity = ({ quantity, productId }: { quantity: number, productId: number }): JSX.Element => {
  const { setDecreaseProductQuantity, setIncreaseProductQuantity } = useProductsStore()

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { setDecreaseProductQuantity(productId) } } style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantityText}>{quantity}</Text>
      <TouchableOpacity onPress={() => { setIncreaseProductQuantity(productId) } } style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    maxWidth: '60%',
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  button: {
    padding: 3,
    borderRadius: 5,
    backgroundColor: '#ccc'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  quantityText: {
    fontSize: 18
  }
})
