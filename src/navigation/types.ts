import { Product } from "@api";
import { NavigationProp, RouteProp } from "@react-navigation/native";

export enum ROUTES {
  HOME = "HomeScreen",
  PRODUCT_DETAIL = "ProductDetailScreen",
}

export type NavigationProps = {
  [ROUTES.HOME]: undefined;
  [ROUTES.PRODUCT_DETAIL]: Product;
};

export type AppStackNavigatorParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.PRODUCT_DETAIL]: Product;
};

export type AppStackScreenProps<T extends keyof AppStackNavigatorParamList> = {
  navigation: NavigationProp<AppStackNavigatorParamList, T>;
  route: RouteProp<AppStackNavigatorParamList, T>;
};
