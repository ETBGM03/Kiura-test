import { FlatList, ListRenderItemInfo, Text, View } from "react-native";
import React, { useCallback } from "react";
import { useHome } from "@hooks";
import { Product } from "@api";
import { HomeLayout, ProductCard } from "@components";

import { styles } from "./styles";
import { Loader } from "./Loader";
import { HeaderComponent } from "./Header";

export function HomeScreen() {
  const { isLoading, data,handleViewDetail } = useHome();

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Product>) => (
      <ProductCard {...item} handleViewDetail={handleViewDetail} key={`product_card_${item.id}`} />
    ),
    []
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <HomeLayout>
      <FlatList<Product>
        data={data?.products ?? []}
        ListHeaderComponent={HeaderComponent}
        renderItem={renderItem}
        keyExtractor={({ id }) => String(id)}
        contentContainerStyle={styles.separator}
        showsVerticalScrollIndicator={false}
      />
    </HomeLayout>
  );
}
