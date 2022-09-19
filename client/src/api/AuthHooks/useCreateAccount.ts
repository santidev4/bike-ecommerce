import { useMutation } from 'react-query'
import axios from 'axios'
import { CreateAccountData } from '../../types/authTypes'

export const useCreateAccount = () => {
  return useMutation(['createAccount'], (userData: CreateAccountData) => {
    return axios.post('http://localhost:3001/register', userData)
  })
}