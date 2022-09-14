import styled from 'styled-components'

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    
    
    div {
        /* overflow: hidden; */
        position: absolute;
        padding: 90px 10px;
    }
    
    h1 {
        font-size: 55px;
        font-weight: 600;
        letter-spacing: 10px;
    }
    
    h3 {
        text-align: center;
        font-size: 20px;
        font-weight: 400;
        letter-spacing: 8px;
    }
`