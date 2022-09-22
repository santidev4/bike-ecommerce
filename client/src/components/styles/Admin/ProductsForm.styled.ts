import styled from 'styled-components'

export const ProductsForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* align-items: center; */
  padding: 30px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  background-color: hsla(330, 99%, 99%, 0.8);
  border-radius: 10px;
  flex-direction: row;

  div {
        /* display: flex; 
        flex-direction: column; */
  }

  label {
    align-self: center;
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`