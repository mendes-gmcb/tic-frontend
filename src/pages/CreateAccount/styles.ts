import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    max-width: 700px;
    height: 20vh;
    background-color: #0000f5;
    color: #f6f6f6;
    padding: 0 1.5rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
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
    height: 60vh;
    padding: 0 1.5rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #0000f5;

    div {
        width: 100%;
        padding: 0 ;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 0;
        border-radius: 2rem;
        background-color: #fff;
    }

    input {
        display: block;
        width: 100%;
        height: 3rem;
        padding: 0 24px;
        border: 0;
        border-radius: 1.2rem;
        color: #0000f5;
    }

    button {
        width: 100%;
        height: 3rem;
        background-color: #f6f6f6;
        border-radius: 2rem;
        border: 0;

        margin-top: 2rem;

        color: #0000f5;
        font-size: 1.2rem;
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
    height: 20vh;
    display: flex;
    margin: 0 auto;
`