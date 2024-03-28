import { type Product } from '@api'
import { type NavigationProp, type RouteProp } from '@react-navigation/native'

export enum ROUTES {
  HOME = 'HomeScreen',
  PRODUCT_DETAIL = 'ProductDetailScreen',
  PRODUCT_CAR_DETAILS = 'PRODUCT_CAR_DETAILS'
}

export type ParamListBase = Record<string, undefined | object>

export interface AppStackNavigatorParamList extends ParamListBase {
  [ROUTES.HOME]: undefined
  [ROUTES.PRODUCT_DETAIL]: Product
  [ROUTES.PRODUCT_CAR_DETAILS]: undefined
}

export interface AppStackScreenProps<T extends keyof AppStackNavigatorParamList> {
  navigation: NavigationProp<AppStackNavigatorParamList, T>
  route: RouteProp<AppStackNavigatorParamList, T>
}
