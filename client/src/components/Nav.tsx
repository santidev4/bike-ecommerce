import React, { useEffect } from 'react'
import { StyledNav } from './styles/NavStyles/Nav.styled'
import { Logo } from './styles/NavStyles/Logo.styled'
import { Menu } from './styles/NavStyles/Menu.styled'
import { Utils } from './styles/NavStyles/Utils.styled'
import SearchBar from './Nav/SearchBar'
import { NavLink } from 'react-router-dom'
import useStore from '../store/useStore'
import { useGetUserData } from '../api/AuthHooks/useGetUserData'
import ProfileNav from './Nav/ProfileNav'
import CartNavLogo from './Nav/CartNavLogo'

function Nav () {
  // TODO buscar el rol del user para renderizar o no la pagina admin

  const decodedCookie = decodeURIComponent(document.cookie)
  const cookie = decodedCookie.slice(0, decodedCookie.indexOf('.')).slice(decodedCookie.indexOf(':') + 1)
  const { data } = useGetUserData(cookie)
  const setProfileData = useStore((state) => state.setProfileData)

  useEffect(() => {
    if (data) setProfileData(data)
  }, [data])

  console.log('data from nav', data)
  return (
    <>
      <StyledNav>

        <Logo><NavLink to='/'>Manija</NavLink></Logo>

        <Menu>
          <ul>
            <li><NavLink to='/bikes'>Bikes</NavLink></li>
            <li><NavLink to='/accesories'>Accesories</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='contact'>Contact</NavLink></li>
            {
              data?.role === 'admin' &&
            <li><NavLink to='/admin'>Admin</NavLink></li>
            }
          </ul>
        </Menu>

        <Utils>
          <SearchBar />
          {/* `/profile/${data?.id}` */}

          <ProfileNav />

          <CartNavLogo />

        </Utils>
      </StyledNav>
    </>
  )
}

export default Nav
