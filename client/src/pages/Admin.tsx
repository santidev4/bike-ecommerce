import React from 'react'
import { Outlet } from 'react-router-dom'
// import Dashboard from '../components/Dashboard'
import AdminNavBar from '../components/Admin/AdminNavBar'
import { AdminContainer } from '../components/styles/Admin/AdminContainer.styled'

function Admin () {
  return (
    <AdminContainer>
      <AdminNavBar />
      {/* <Dashboard /> */}
      <Outlet />
    </AdminContainer>
  )
}

export default Admin
