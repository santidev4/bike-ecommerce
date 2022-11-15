import axios, { AxiosResponse } from 'axios'
import { useQuery } from 'react-query'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export const useGetUserData = (cookieId: string) => {
  return useQuery(['profileData', { cookieId }], () => {
    const response = axios.get(`${BACKEND_URL}/profile/${cookieId}`, {
      withCredentials: true
    }).then((response: AxiosResponse) => {
      console.log(response)
      return response.data
    })
      .catch((error) => {
        console.log(error)
      })
    return response
  })
}
