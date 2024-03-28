import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export function Error (): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 12 }}>
          <Text style={{ fontSize: 22, textAlign: 'center' }}>Ooops! something went wrong. Please try again</Text>
        </View>
      </SafeAreaView>
  )
}
