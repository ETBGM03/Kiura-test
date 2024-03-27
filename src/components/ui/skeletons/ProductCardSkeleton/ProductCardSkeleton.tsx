import React from 'react';
import {Text, View} from 'react-native';


import {styles} from './styles';

export const ProductCardSkeleton = () => {
  return (
    <View style={styles.cardLoader}>
      <Text>Loading products...</Text>
    </View>
  );
};