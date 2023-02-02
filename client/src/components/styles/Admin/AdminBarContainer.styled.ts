import styled from 'styled-components'

export const AdminBarContainer = styled.div`
  position: sticky;
  background-color: hsl(100, 7%, 97%);
  width: 100vw;

  ul {
    display: flex;
    justify-content: space-around;
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
