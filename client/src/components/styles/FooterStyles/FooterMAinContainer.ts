import styled from 'styled-components'

export const FooterMainContainer = styled.section`
  width: 100%;
  height: ${({theme}) => theme.size.footerHeight};
  background-color: hsla(20, 10%, 10%, 0.9);
  color: white;
  display: flex;
  justify-content: center;
  div {
    padding: 10px;
  }
  a {
    margin-top: 45px;
    
  }
`