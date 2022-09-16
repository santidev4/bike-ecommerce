import styled from 'styled-components'

export const StyledNav = styled.nav`
  background-color: hsl(120, 100%, 100%);
  position: sticky;
  top: 0;
  height: ${({theme}) => theme.size.navHeight};
  width: 100%;
  max-width: 1920px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px 0 30px;
  z-index: 9999;
  li {
      list-style-type: none;

  }
`