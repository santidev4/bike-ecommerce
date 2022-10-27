import { StateCreator } from 'zustand'

export interface Profile {
  username: string,
  email: string,
  firstName: string | undefined,
  lastName: string | undefined,
  document: number | undefined,
  avatar: string | undefined,
  address: [],
  addUsername: (payload: Profile['username']) => void
}

 export const profile: StateCreator<Profile> = (set) => ({
  username: '',
  email: '',
  firstName: undefined,
  lastName: undefined,
  document: undefined,
  avatar: undefined,
  address: [],
  addUsername: (payload: Profile['username']) => set((state) => ({
    ...state,
    username: payload
  }))
})

