import { type Product } from '@api'
import { create } from 'zustand'

interface BearState {
  productsFiltered: Product[] | null
  category: string
  setCategory: (category: string) => void
}

export const useProductsStore = create<BearState>()((set) => ({
  productsFiltered: null,
  category: '',
  setCategory: (category) => { set(() => ({ category })) }
}))
