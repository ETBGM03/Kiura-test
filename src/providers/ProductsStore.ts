import { type Product } from '@api'
import Toast from 'react-native-root-toast'
import { create } from 'zustand'
import { calculateTotal } from './helpers'

interface ProductState {
  category: string
  productsCard: Product[]
  totalToPaid: number
  setAddNewProductCar: (values: Product) => void
  setRemoveProductCar: (idProducts: number) => void
  setDecreaseProductQuantity: (value: number) => void
  setIncreaseProductQuantity: (value: number) => void
  setCategory: (category: string) => void
  completeCheckOut: () => void
}
export const useProductsStore = create<ProductState>()((set) => ({
  category: '',
  productsCard: [],
  totalToPaid: 0,

  setAddNewProductCar: (newProduct) => {
    set((state) => {
      const isProductInCart = state.productsCard.some(product => product.id === newProduct.id)

      if (isProductInCart) {
        Toast.show(`Product ${newProduct.title} is already in the cart.`, {
          animation: true
        })
        return state
      }

      const updatedProductsCard = [...state.productsCard, { ...newProduct, quantity: 1 }]

      Toast.show(`Product ${newProduct.title} added to cart.`, {
        animation: true
      })

      return {
        ...state,
        productsCard: updatedProductsCard,
        totalToPaid: calculateTotal(updatedProductsCard)
      }
    })
  },

  setRemoveProductCar: (id) => {
    set((state) => {
      const updatedProductsCard = state.productsCard.map(product => {
        if (product.id === id) {
          product.quantity -= 1
        }
        return product
      }).filter(product => product.quantity > 0)

      const updatedTotalToPaid = calculateTotal(updatedProductsCard)

      return {
        ...state,
        productsCard: updatedProductsCard,
        totalToPaid: updatedTotalToPaid
      }
    })
  },

  setIncreaseProductQuantity: (id: number) => {
    set((state) => {
      const updatedProductsCard = state.productsCard.map(product => {
        if (product.id === id) {
          product.quantity += 1
        }
        return product
      })

      const updatedTotalToPaid = calculateTotal(updatedProductsCard)

      return {
        ...state,
        productsCard: updatedProductsCard,
        totalToPaid: updatedTotalToPaid
      }
    })
  },

  setDecreaseProductQuantity: (id: number) => {
    set((state) => {
      const updatedProductsCard = state.productsCard.map(product => {
        if (product.id === id && product.quantity > 0) {
          product.quantity -= 1
        }
        return product
      }).filter(product => product.quantity > 0)

      const updatedTotalToPaid = calculateTotal(updatedProductsCard)

      return {
        ...state,
        productsCard: updatedProductsCard,
        totalToPaid: updatedTotalToPaid
      }
    })
  },

  setCategory: (category) => {
    set(() => ({ category }))
  },

  completeCheckOut: () => {
    set((state) => {
      Toast.show('Your purchase has been completed successfully. Thank you for shopping with us!', {
        animation: true
      })

      return {
        ...state,
        productsCard: [],
        totalToPaid: 0
      }
    })
  }
}))
