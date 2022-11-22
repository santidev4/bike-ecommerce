import styled from 'styled-components'

export const SearchBar = styled.input`
    border-radius: 15px;
    height: 25px;
    border: 1px solid rgb(120, 120, 120);
    width: 225px;

    &:focus {
        border: 1px solid ${({ theme }) => theme.colors.primary};
        outline: none;
    }
`
