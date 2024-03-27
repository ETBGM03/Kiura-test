import { View, Text, ListRenderItemInfo, FlatList } from "react-native";
import React, { useCallback } from "react";
import { useHeader } from "./useHeader";

export function HeaderComponent() {
    const {data} = useHeader()


  const renderItemCategory = useCallback(
    ({ item }: ListRenderItemInfo<string>) => (
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 6,
          maxHeight: 30,
          paddingVertical: 6,
          paddingHorizontal: 16,
        }}
      >
        <Text
          style={{
            color: "#000",
            fontWeight: "500",
            textTransform: "capitalize",
            alignSelf: "flex-start",
            borderRadius: 12,
          }}
        >
          {item}
        </Text>
      </View>
    ),
    []
  );

  return (
    <View style={{ height: 100 }}>
      <Text>Categories</Text>
      <FlatList<string>
        data={data ?? []}
        renderItem={renderItemCategory}
        horizontal
        contentContainerStyle={{ columnGap: 20, alignSelf: "center" }}
      />
    </View>
  );
}
