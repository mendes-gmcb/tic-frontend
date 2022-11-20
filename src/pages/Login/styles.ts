import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    max-width: 700px;
    height: 20vh;
    background-color: #0000f5;
    color: #f6f6f6;
    padding: 0 1.5rem;
    margin: 0 auto;
    h1 {
        line-height: 36px;
        font-size: 28px;
    }
    h3 {
        font-size: 1rem;
    }
`

export const Formulario = styled.form`
    /* margin-top: 40px; */
    max-width: 700px;
    height: 40vh;
    padding: 0 1.5rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #0000f5;

    input {
        display: block;
        width: 100%;
        height: 3rem;
        padding: 0 24px;
        border: 2px solid #fff;
        border-radius: 5px 0px 0px 5px;
        color: #3a3a3a;
        border-right: 0;
    }
    button {
        width: 100%;
        height: 3rem;
        background-color: #04d361;
        border-radius: 0px 5px 5px 0px;
        border: 0;
        color: #fff;
        font-weight: bold;
    }
    span {
        display: flex;
        color: #f6f6f6;

    }
    a {
        color: #f6f6f6;
        text-decoration: none;
        font-weight: 600;
    }
`

export const Image = styled.img`
    max-width: 700px;
    width: 60vw;
    height: 40vh;
    display: flex;
    margin: 0 auto;

    /* @media screen and (min-width: 500px) and (min-aspect-ratio: 1/1) {
        width: 40vw;
        height: 10vh;
    } */
`