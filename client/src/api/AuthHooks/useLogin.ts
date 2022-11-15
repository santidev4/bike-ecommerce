import { LoginData } from './../../types/authTypes'
import { useMutation } from 'react-query'
import axios from 'axios'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export const useLogin = () => {
  return useMutation(['login'], (user: LoginData) => {
    return axios.post(`${BACKEND_URL}/login`, user, {
      withCredentials: true
    }).then(function (response) {
      console.log(response)
    })
      .catch(function (error) {
        console.log(error)
      })
  })
}
