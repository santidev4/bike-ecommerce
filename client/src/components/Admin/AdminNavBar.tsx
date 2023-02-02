import React from 'react'
import { NavLink } from 'react-router-dom'
import { AdminBarContainer } from '../styles/Admin/AdminBarContainer.styled'

function AdminNavBar () {
  return (
    <AdminBarContainer>
      <ul>
        <li><NavLink to='/admin/products'>Products</NavLink></li>
        <li><NavLink to='/admin/categories'>Categories</NavLink></li>
        <li><NavLink to='/admin/brands'>Brands</NavLink></li>
      </ul>
    </AdminBarContainer>
  )
}

export default AdminNavBar
