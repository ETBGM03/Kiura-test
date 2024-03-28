import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CarProductDetails, HomeScreen, ProductDetail } from '@screens'
import { type AppStackNavigatorParamList, ROUTES } from './types'

const { Navigator, Screen } = createNativeStackNavigator<AppStackNavigatorParamList>()

export function AppRouter (): JSX.Element {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name={ROUTES.HOME} component={HomeScreen} />
        <Screen name={ROUTES.PRODUCT_DETAIL} component={ProductDetail} />
        <Screen name={ROUTES.PRODUCT_CAR_DETAILS} component={CarProductDetails} />
      </Navigator>
    </NavigationContainer>
  )
}
