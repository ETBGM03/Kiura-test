import { ProductCardSkeleton } from "@components";
import React from "react";
import { ScrollView } from "react-native";

import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export function Loader() {
  return (
    <SafeAreaView style={styles.containerLoader}>
      <ScrollView style={styles.containerLoader}>
        <ProductCardSkeleton key={`card-skeleton`} />
      </ScrollView>
    </SafeAreaView>
  );
}
