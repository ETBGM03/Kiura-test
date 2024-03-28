import { type Product } from '@api'

export interface ProductCardProps extends Product {
  handleViewDetail: (values: Product) => void
}
