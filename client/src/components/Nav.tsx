import React, { useEffect } from 'react'
import { StyledNav } from './styles/NavStyles/Nav.styled'
import { Logo } from './styles/NavStyles/Logo.styled'
import { Menu } from './styles/NavStyles/Menu.styled'
import { Utils } from './styles/NavStyles/Utils.styled'
import SearchBar from './Nav/SearchBar'
import { Link } from 'react-router-dom'
import useStore from '../store/useStore'
import { useGetUserData } from '../api/AuthHooks/useGetUserData'
import ProfileNav from './Nav/ProfileNav'

function Nav () {
  // TODO buscar el rol del user para renderizar o no la pagina admin

  const decodedCookie = decodeURIComponent(document.cookie)
  const cookie = decodedCookie.slice(0, decodedCookie.indexOf('.')).slice(decodedCookie.indexOf(':') + 1)
  const { data } = useGetUserData(cookie)
  const setProfileData = useStore((state) => state.setProfileData)
  const profile = useStore((state) => state)

  useEffect(() => {
    if (data) setProfileData(data)
  }, [data])

  console.log('data', data)
  console.log('profile', profile)

  return (
    <>
      <StyledNav>

        <Logo><Link to='/'>Manija</Link></Logo>

        <Menu>
          <ul>
            <li><Link to='/bikes'>Bikes</Link></li>
            <li><Link to='/accesories'>Accesories</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='contact'>Contact</Link></li>
            {
              data?.role === 'admin' &&
            <li><Link to='/admin'>Admin</Link></li>
            }
          </ul>
        </Menu>

        <Utils>
          <SearchBar />
          {/* `/profile/${data?.id}` */}

          <ProfileNav />

          <a href="">
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </span>
          </a>
        </Utils>
      </StyledNav>
    </>
  )
}

export default Nav
