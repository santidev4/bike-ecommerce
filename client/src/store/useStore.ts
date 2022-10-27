import create from 'zustand'
import { profile, Profile} from './slices/profileSlice'

const useStore = create<Profile>((...a) => ({
  ...profile(...a)
}))

export default useStore