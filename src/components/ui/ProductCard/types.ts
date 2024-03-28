import { type Product } from '@api'

export interface ProductCardProps extends Product {
  handleViewDetail?: (values: Product) => void
  handleAddToCar?: (product: Product) => void
  handleRemoveProduct?: (productId: number) => void
  isProductCar?: boolean
}

export interface ProductQuantityProps {
  quantity: number
  productId: number
  price: number
}
