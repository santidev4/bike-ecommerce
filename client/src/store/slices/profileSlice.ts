import { StateCreator } from 'zustand'

export interface Profile {
  username: string,
  email: string,
  firstName: string | undefined,
  lastName: string | undefined,
  document: number | undefined,
  avatar: string | undefined,
  address: [],
  setProfileData: (payload: Profile) => void
}

export const profile: StateCreator<Profile> = (set) => ({
  username: '',
  email: '',
  firstName: '',
  lastName: '',
  document: undefined,
  avatar: undefined,
  address: [],
  setProfileData: (payload: Profile) => set((state) => ({
    ...state,
    ...payload
  }))
})
