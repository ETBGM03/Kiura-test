import { SafeAreaView } from "react-native-safe-area-context";
import React, { PropsWithChildren } from "react";
import { View } from "react-native";

export function HomeLayout(props: PropsWithChildren) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 12 }}>{props.children}</View>
    </SafeAreaView>
  );
}
