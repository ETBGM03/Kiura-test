import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons, AntDesign } from '@expo/vector-icons'

import { type ProductCardProps } from './types'
import { styles } from './styles'
import { type Product } from '@api'

export function ProductCard (props: ProductCardProps): JSX.Element {
  const {
    images,
    title,
    price,
    description,
    category,
    handleViewDetail,
    handleAddToCar
  } = props

  const handlePress = (props: Product) => () => {
    handleViewDetail(props)
  }
  const handlePressAddCar = (props: Product) => () => {
    handleAddToCar(props)
  }

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={handlePress(props)}
      style={styles.container}
      accessible={false}
    >
      <View style={styles.contentImage}>
        <Image
          source={{ uri: images[0] }}
          style={styles.imageProduct}
          resizeMode="cover"
        />
      </View>
      <View style={{ flex: 1, rowGap: 8, justifyContent: 'center' }}>
        <Text style={{ color: '#000' }}>{title}</Text>
        <Text style={{ color: '#000' }} numberOfLines={2}>
          {description}
        </Text>
        <View style={{ flexDirection: 'row', columnGap: 6 }}>
          <Text
            style={{
              color: '#fff',
              fontWeight: '600',
              backgroundColor: 'green',
              alignSelf: 'flex-start',
              borderRadius: 12,
              paddingHorizontal: 6
            }}
            numberOfLines={2}
          >
            {category}
          </Text>
          <Text>${price}</Text>
        </View>
      </View>

      <View
        style={{
          justifyContent: 'space-between',
          paddingTop: 12,
          paddingBottom: 6
        }}
      >
        <Pressable
          style={{ width: 40, height: 30 }}
          onPress={handlePressAddCar(props)}
        >
          <MaterialIcons name="add-shopping-cart" size={24} color="#898996" />
        </Pressable>

        <Pressable
          style={{ width: 40, height: 30 }}
          onPress={handlePress(props)}
        >
          <AntDesign name="arrowright" size={28} color="#898996" />
        </Pressable>
      </View>
    </TouchableOpacity>
  )
}
