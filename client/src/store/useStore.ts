import create from 'zustand'
import { profile, Profile } from './slices/profileSlice'
import { mountStoreDevtool } from 'simple-zustand-devtools'

const useStore = create<Profile>((...a) => ({
  ...profile(...a)
}))

mountStoreDevtool('Store', useStore)

export default useStore
