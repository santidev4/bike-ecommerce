import styled from 'styled-components'

export const Select = styled.select`
  width: 300px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid rgba(0, 0 ,0, 0.5);
  margin: 10px;
  background-color: white;

  &:focus {
    border: 1px solid ${({theme}) => theme.colors.primary};
    outline: none;
  }
`

export const Option = styled.option`
  width: 300px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid rgba(0, 0 ,0, 0.5);
  margin: 10px;

  &:focus {
    border: 1px solid ${({theme}) => theme.colors.primary};
    outline: none;
  }
`