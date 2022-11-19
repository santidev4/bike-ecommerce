import styled from 'styled-components'

export const ButtonSubmit = styled.input.attrs(props => ({
  type: 'submit',
  value: props.value
}
))`
    background-color: ${({ theme }) => theme.colors.primary};
    color: rgb(40, 40, 40);
    border-radius: 10px;
    width: 300px;
    height: 30px;
    border: none;
    font-size: 15px;
    letter-spacing: 2px;
    font-weight: 500;
    justify-items: center;
    margin-top: 20px;

    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.secondary};
        color: white;
        transition: all 0.3s;
    }

    &:disabled{
      color: hsla(100, 0%, 0%, 0.3);
      background-color: hsla(0, 30%, 90%, 0.6);
      cursor: not-allowed;
    }
`
