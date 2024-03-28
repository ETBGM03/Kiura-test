import { Product } from "@api"

export interface ProductState {
    category: string
    productsCard: Product[]
    totalToPaid: number
    searchQuery: string
    setAddNewProductCar: (values: Product) => void
    setRemoveProductCar: (idProducts: number) => void
    setDecreaseProductQuantity: (value: number) => void
    setIncreaseProductQuantity: (value: number) => void
    setCategory: (searchQuery: string) => void
    setSearchQuery: (category: string) => void
    completeCheckOut: () => void
  }