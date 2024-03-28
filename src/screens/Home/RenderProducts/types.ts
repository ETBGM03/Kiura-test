import { type Product } from '@api'

export interface RenderProductProps {
  products: Product[]
  handleViewDetail: (product: Product) => void
}
