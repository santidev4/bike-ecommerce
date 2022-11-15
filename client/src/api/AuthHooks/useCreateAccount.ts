import { useMutation } from 'react-query'
import axios from 'axios'
import { CreateAccountData } from '../../types/authTypes'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export const useCreateAccount = () => {
  return useMutation(['createAccount'], (userData: CreateAccountData) => {
    return axios.post(`${BACKEND_URL}/register`, userData)
  })
}
