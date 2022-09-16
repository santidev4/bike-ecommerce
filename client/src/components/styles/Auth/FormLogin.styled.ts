import styled from 'styled-components'

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  /* justify-content: center; */
  align-items: center;
  padding: 30px 75px 75px 75px;
  border-radius: 10px;
  background-color: hsla(330, 99%, 99%, 0.8);
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);

  h2 {
    font-weight: 500;
    letter-spacing: 2px;
    margin-bottom: 90px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  label {
    margin: 10px 0 5px 12px;
    letter-spacing: 2px;
    font-weight: 300;
  }

  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.7);
    letter-spacing: 1px;
    font-weight: 400;
    margin-top: 10px;
    margin-bottom: 20px;

    &:hover {
      color: rgba(10, 0, 0, 0.5);
      transition: all 0.3s;
    }
  }

  p {
    max-width: max-content;
    font-weight: 200;
    color: hsla(360, 90%, 40%, 0.8);
    margin: 0 10px 0 10px
  }

`