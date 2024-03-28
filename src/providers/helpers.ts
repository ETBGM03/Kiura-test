import { type Product } from '@api'

export function calculateTotal (productsCard: Product[]): number {
  return productsCard.reduce((total, product) => total + (product.price * (product.quantity ?? 1)), 0)
}
