import { Product, queryAllProducts } from "@api";
import { ROUTES, NavigationProps as CustomNavigationProps } from "@navigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";

export function useHome() {
  const navigation = useNavigation<NavigationProp<CustomNavigationProps>>();

  const rest = useQuery<{ products: Product[]; total: number }>({
    queryKey: ["products"],
    queryFn: ({ signal }) => queryAllProducts(signal!),
  });

  const handleViewDetail = useCallback((props: Product) => {
    navigation.navigate(ROUTES.PRODUCT_DETAIL, { ...props });
  }, []);

  return { ...rest, handleViewDetail };
}
