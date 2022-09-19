import { LoginData } from './../../types/authTypes';
import { useMutation } from 'react-query';
import axios from 'axios'

export const useLogin = () => {
  return useMutation(['login'], (user: LoginData) => {
    return axios.post('http://localhost:3001/login', user)
  }) 
}

 