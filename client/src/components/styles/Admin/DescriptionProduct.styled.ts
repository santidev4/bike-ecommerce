import styled from 'styled-components'

export const DescriptionProduct = styled.textarea`
  width: 300px;
  height: 60px;
  border-radius: 15px;
  border: 1px solid rgba(0, 0 ,0, 0.5);
  margin: 10px;

  &:focus {
    border: 1px solid ${({theme}) => theme.colors.primary};
    outline: none;
  }
`