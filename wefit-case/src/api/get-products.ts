import { api } from '@/lib/axios'

import { Product } from './product'

interface GetProductsParams {
  search?: string | null
}

export async function getProducts({ search }: GetProductsParams) {
  const response = await api.get<Product[]>('/products', {
    params: { title_like: search },
  })

  return response.data
}
