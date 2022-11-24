import React from 'react'
import { DropDownMenuContainer } from './styles/NavStyles/DropDownMenuContainer.styled'

function DropDownMenu () {
  return (
    <>
      <DropDownMenuContainer>
        <ul>
          <li>Profile</li>
          <li>LogOut</li>
        </ul>
      </DropDownMenuContainer>
    </>
  )
}

export default DropDownMenu
