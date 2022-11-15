import { useMutation } from 'react-query'
import axios from 'axios'
import { ProductType } from '../../types/AdminTypes'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export const useCreateProduct = () => {
  return useMutation(['createProduct'], (productData: ProductType) => {
    return axios.post(`${BACKEND_URL}/products`, productData)
  })
}
