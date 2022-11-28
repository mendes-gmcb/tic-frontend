import styled from "styled-components";

export const Form = styled.form`
    flex: 1;
    max-width: 100vw;
    padding: 1.5rem;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

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
        border-bottom: 1px solid #0000f5;
        color: #0000f5;
    }

    button {
        width: 100%;
        height: 3rem;
        background-color: #f6f6f6;
        border-radius: 2rem;
        border: 1px solid #0000f5;

        margin-top: 2rem;

        color: #0000f5;
        font-size: 1.2rem;
        font-weight: bold;
    }
`; 