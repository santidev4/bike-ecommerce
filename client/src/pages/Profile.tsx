import React from 'react'
import useStore from '../store/useStore'

function Profile () {
  const profileData = useStore(state => state)
  console.log('profileData', profileData)
  return (
    <div>Profile email: {profileData.email} </div>
  )
}

export default Profile
