import { type Product } from '@api'
import Toast from 'react-native-root-toast'
import { create } from 'zustand'

interface ProductState {
  category: string
  productsCard: Product[]
  totalToPaid: number
  setAddNewProductCar: (values: Product) => void
  setRemoveProductCar: (idProducts: number) => void
  setDecreaseProductQuantity: (value: number) => void
  setIncreaseProductQuantity: (value: number) => void
  setCategory: (category: string) => void
}
export const useProductsStore = create<ProductState>()((set) => ({
  category: '',
  productsCard: [],
  totalToPaid: 0,

  setAddNewProductCar: (newProduct) => {
    set((state) => {
      const existingProductIndex = state.productsCard.findIndex(product => product.id === newProduct.id)

      if (existingProductIndex !== -1) {
        const updatedProductsCard = [...state.productsCard]
        updatedProductsCard[existingProductIndex].quantity += 1

        Toast.show(`Increased quantity of ${newProduct.title}!!`, {
          animation: true
        })

        return {
          ...state,
          productsCard: updatedProductsCard,
          totalToPaid: calculateTotal(updatedProductsCard)
        }
      } else {
        const updatedProductsCard = [...state.productsCard, { ...newProduct, quantity: 1 }]

        Toast.show(`Product ${newProduct.title} added!!`, {
          animation: true
        })

        return {
          ...state,
          productsCard: updatedProductsCard,
          totalToPaid: calculateTotal(updatedProductsCard)
        }
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
  }
}))

const calculateTotal = (productsCard: Product[]): number => {
  return productsCard.reduce((total, product) => total + (product.price * (product.quantity ?? 1)), 0)
}
