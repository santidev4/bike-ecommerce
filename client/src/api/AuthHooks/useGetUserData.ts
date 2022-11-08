import axios, { AxiosResponse } from 'axios'
import { useQuery } from 'react-query'

export const useGetUserData = (cookieId: string) => {
  return useQuery(['profileData', {cookieId}], () => {
    const response =  axios.get(`http://localhost:3001/profile/${cookieId}`, {
      withCredentials: true
    }).then((response: AxiosResponse) => {
      console.log(response);
      return response.data
    })
    .catch((error) => {
      console.log(error);
    })
    return response
  })
}