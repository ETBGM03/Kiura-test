import { type Product } from '@api'
import { type RenderProductProps } from '../RenderProducts/types'

export interface ProductFilteredProps extends Omit<RenderProductProps, 'products'> {
  searchQuery: string
  dataProductsSearchedMemo: Product[]
}
