import { StyledNav } from './../NavStyles/Nav.styled';
import styled  from 'styled-components'

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - (${({theme}) => theme.size.navHeight} + ${({theme}) => theme.size.footerHeight}));
`