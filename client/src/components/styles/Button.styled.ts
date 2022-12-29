import styled from 'styled-components'

export const Button = styled.button`
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
`
