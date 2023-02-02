import React from 'react'
// import AdminNavBar from './Admin/AdminNavBar'
import CreateBrand from './Admin/CreateBrand'
import CreateCategory from './Admin/CreateCategory'
import CreateProducts from './Admin/CreateProducts'
import { Column, Row } from './styles/Admin/ProductsForm.styled'

function Dashboard () {
  return (
    <>
      {/* <AdminNavBar /> */}
      <Column>
        <Row>
          <CreateProducts />
        </Row>
        <Row>
          <CreateCategory />
        </Row>
        <Row>
          <CreateBrand />
        </Row>
      </Column>
    </>
  )
}

export default Dashboard
