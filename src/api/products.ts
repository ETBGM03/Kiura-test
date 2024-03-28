import { URL } from '@constants'

export const queryAllProducts = async (signal: AbortSignal, searchQuery = '') =>
  await fetch(`${URL}/products`, { signal }).then(async res => {
    if (!res.ok) {
      throw new Error('Failed to fetch')
    }
    return await res.json()
  })

export const queryProductsBySearch = async (signal: AbortSignal, searchQuery = '') =>
  await fetch(`${URL}/products/search?q=${encodeURIComponent(searchQuery)}`, { signal }).then(async res => {
    if (!res.ok) {
      throw new Error('Failed to fetch')
    }
    return await res.json()
  })

export const queryCategoriesProduct = async (signal: AbortSignal) =>
  await fetch(`${URL}/products/categories`, { signal }).then(async res => {
    if (!res.ok) {
      throw new Error('Failed to fetch')
    }
    return await res.json()
  })
