import styled from 'styled-components'

export const AdminContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - (${({theme}) => theme.size.navHeight} + ${({theme}) => theme.size.footerHeight}));

`