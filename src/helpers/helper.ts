import { type Product } from '@api'

type ProductAccumulator = Record<string, Product[]>

export const organizeDataByCategory = (products: Product[]): Record<string, Product[]> => {
  return products.reduce((acc: ProductAccumulator, product) => {
    const { category } = product
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(product)
    return acc
  }, {})
}
