import { type Product } from '@api'
import Toast from 'react-native-root-toast'
import { create } from 'zustand'

interface ProductState {
  category: string
  productsCard: Product[]
  setAddNewProductCar: (values: Product) => void
  setRemoveProductCar: (idProducts: number) => void
  totalToPaid: number
  setCategory: (category: string) => void
}

export const useProductsStore = create<ProductState>()((set) => ({
  category: '',
  productsCard: [],
  totalToPaid: 0,
  setAddNewProductCar: (newProduct) => {
    set((state) => {
      const isProductAlreadyInCart = state.productsCard.some(product => product.id === newProduct.id)

      if (isProductAlreadyInCart) {
        Toast.show('Product already exist!!', {
          animation: true
        })
        return state
      }

      const updatedProductsCard = [...state.productsCard, newProduct]
      const updatedTotalToPaid = updatedProductsCard.reduce((total, product) => total + product.price, 0)

      return {
        productsCard: updatedProductsCard,
        totalToPaid: updatedTotalToPaid
      }
    })
  },
  setRemoveProductCar: (id) => {
    set((state) => {
      const newProductsCar = state.productsCard.filter((product) => product.id !== id)
      const updatedTotalToPaid = newProductsCar.reduce((total, product) => total + product.price, 0)

      return {
        productsCard: newProductsCar,
        totalToPaid: updatedTotalToPaid
      }
    })
  },
  setCategory: (category) => {
    set(() => ({ category }))
  }
}))
