import { StyledNav }  from './styles/NavStyles/Nav.styled'
import { Logo } from './styles/NavStyles/Logo.styled'
import { Menu } from './styles/NavStyles/Menu.styled'
import { Utils } from './styles/NavStyles/Utils.styled'
import { SearchBar } from './styles/NavStyles/SearchBar.styled'

function Nav() {
  return (
    <>
        <StyledNav>

        <Logo><a href="">Manija</a></Logo>

        <Menu>
          <ul>
            <li><a href="">Bikes</a></li>
            <li><a href="">Accesories</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
    
          </ul>
        </Menu>

        <Utils>
            <SearchBar type="search" />
            <a href="">
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M21.0004 20.9999L16.6504 16.6499" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </span>
            </a>

            <a href="">
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </span>
            </a>

            <a href="">
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </span>
            </a>
        </Utils>
      </StyledNav>
    </>
  )
}

export default Nav