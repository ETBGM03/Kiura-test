import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, ProductDetail } from "@screens";
import { NavigationProps, ROUTES } from "./types";

const { Navigator, Screen } = createNativeStackNavigator<NavigationProps>();

export function AppRouter() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name={ROUTES.HOME} component={HomeScreen} />
        <Screen name={ROUTES.PRODUCT_DETAIL} component={ProductDetail} />
      </Navigator>
    </NavigationContainer>
  );
}
