import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;1,100;1,200;1,300&family=Roboto:wght@100;300;400;500;700;900&display=swap');

    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        max-width: 1920px;
        padding: 0 30px;
    } 
`