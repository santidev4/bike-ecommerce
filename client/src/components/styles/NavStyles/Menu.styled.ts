import styled from 'styled-components'

export const Menu = styled.div`
    margin: auto;
    font-weight: 400;
    font-size: 19px;
    
    ul {
        display: flex;
    }
    
    li {
        flex-direction: column;
        padding: 0 15px;
    }
    
    a {
        color: rgb(90, 90, 90);
        text-decoration: none;
    }
    
    a:hover {
        text-decoration: underline;
        color: rgb(60, 60, 60);   
    }

`
