import { useMutation, useQuery } from 'react-query'
import axios from 'axios'
import { ProductType, CreateCategoryType, CreateBrandType } from '../../types/AdminTypes'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export const useCreateProduct = () => {
  return useMutation(['createProduct'], async (productData: ProductType) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/products`, productData, {
        withCredentials: true
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  })
}

export const useGetCategories = () => {
  return useQuery('categories', async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/categories`, {
        withCredentials: true
      })
      return response.data
    } catch (error) {
      console.log(error)
    }
  })
}

export const useGetBrands = () => {
  return useQuery('brands', async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/brands`)
      return response.data
    } catch (error) {
      console.log(error)
    }
  })
}

export const useCreateCategory = () => {
  return useMutation('createCategory', async (category: CreateCategoryType) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/categories`, category, {
        withCredentials: true
      })
      return response
    } catch (error) {
      console.log(error)
    }
  })
}

export const useCreateBrand = () => {
  return useMutation('createBrand', async (brand: CreateBrandType) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/brands`, brand, {
        withCredentials: true
      })
      return response
    } catch (error) {
      console.log(error)
    }
  })
}
