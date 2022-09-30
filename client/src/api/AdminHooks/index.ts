import { useMutation } from 'react-query'
import axios from 'axios'
import { ProductType } from '../../types/AdminTypes'

export const useCreateProduct = () => {
  return useMutation(['createProduct'], (productData: ProductType) => {
    return axios.post('http://localhost:3001/products', productData)
  })
}