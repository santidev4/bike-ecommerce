import styled from 'styled-components'

export const Utils = styled.div`
    display: flex;
    align-items: center;
    a {
        padding: 0 10px;
    }

    input {
        border-radius: 15px;
        height: 25px;
        border: 1px solid rgb(120, 120, 120);
        width: 225px;
    }
    input&:focus {
        border: 1px solid rgb(220, 220, 220);

    }
`