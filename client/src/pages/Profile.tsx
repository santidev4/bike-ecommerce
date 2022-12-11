import React from 'react'
import useStore from '../store/useStore'

function Profile () {
  const profileData = useStore(state => state)
  console.log('profileData', profileData)
  return (
    <>
      <div>
        username: {profileData.username}
      </div>
        email: {profileData.email}
    </>
  )
}

export default Profile
