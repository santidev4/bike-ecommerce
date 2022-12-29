import styled from 'styled-components'

export const FooterMainContainer = styled.footer`
  width: 100%;
  height: ${({ theme }) => theme.size.footerHeight};
  background-color: hsla(20, 10%, 10%, 0.9);
  color: white;
  /* display: relative; */
  justify-items: center;
  text-align: center;
  position: sticky;
  margin-bottom: 0;
  bottom: 0;
  div {
    padding: 10px;
  }
  a {
    margin-top: 45px;
    
  }
`
