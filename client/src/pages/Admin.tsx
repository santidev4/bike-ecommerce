
import React from 'react'
import Dashboard from '../components/Dashboard'
import SideBar from '../components/Admin/SideBar'
import { AdminContainer } from '../components/styles/Admin/AdminContainer.styled'

function Admin () {
  return (
    <AdminContainer>
      <SideBar />
      <Dashboard />
    </AdminContainer>
  )
}

export default Admin
