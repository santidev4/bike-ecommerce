import styled from 'styled-components'


export const CardSlider = styled.article`
    width: 350px;
    height: 450px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden;
    margin: 50px;
    padding: 15px;

    img {
        width: 100%;
        border-radius: 7px;
    }

    h3 {
        font-size: 25px;
        font-weight: 300;
        letter-spacing: 3px;
        text-align: center;
    }

    p {
        text-align: center;
        font-size: 15px;
        font-weight: 200;
        letter-spacing: 2px;
    }
`