import React from 'react'
import { ActivityIndicator, View } from 'react-native'

import { styles } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'

export function Loader (): JSX.Element {
  return (
    <SafeAreaView style={styles.containerLoader}>
      <View>
        <ActivityIndicator size="large" color="#b3cbe3" />
      </View>
    </SafeAreaView>
  )
}
