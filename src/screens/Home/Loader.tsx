import { ProductCardSkeleton } from "@components";
import React from "react";
import { ScrollView, ActivityIndicator, View } from "react-native";

import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export function Loader() {
  return (
    <SafeAreaView style={styles.containerLoader}>
      <View>
        <ActivityIndicator size="large" color="#b3cbe3" />
      </View>
    </SafeAreaView>
  );
}
