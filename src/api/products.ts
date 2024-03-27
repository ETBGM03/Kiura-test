import { URL } from '@constants';

export const queryAllProducts = (signal: AbortSignal) =>
  fetch(`${URL}/products`, {signal}).then(res => {
    if (!res.ok) {
      throw new Error('Failed to fetch');
    }
    return res.json();
  });


  export const queryCategoriesProduct = (signal: AbortSignal) =>
  fetch(`${URL}/products/categories`, {signal}).then(res => {
    if (!res.ok) {
      throw new Error('Failed to fetch');
    }
    return res.json();
  });
