import styled from "styled-components";

export const Main = styled.main`
    flex: 1;
    display: flex;
    height: 90vh;

    h1 {
        width: 100%;
        height: 8vh;
        color: #0000f5;
        border-bottom: 2px solid #0000f5;
        margin: 2vh 1rem 0;
    }

    a {
        width: 3.5rem;
        height: 3.5rem;
        display: flex;
        justify-content: center;
        align-items: top;
        position: fixed;
        right: 10vw;
        bottom: 15vh;

        border: 0;
        border-radius: 50%;

        background-color: #0000f5;
        color: #f6f6f6;

        text-align: center;
        line-height: 3rem;
        font-size: 3rem;
        text-decoration: none;
    }
`