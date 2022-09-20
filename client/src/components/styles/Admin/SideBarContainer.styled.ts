import styled from 'styled-components'

export const SideBarContainer = styled.div`
  position: sticky;
  background-color: hsl(180, 97%, 97%);
  width: 20%;

  ul {
    li {
      list-style: none;

      a {
        text-decoration: none;
        color: hsl(120, 10%, 30%);
        font-weight: 400;
        font-size: 1.4rem;
        padding: 1rem;
        margin-top: 1rem;
      }
    }
  }
`