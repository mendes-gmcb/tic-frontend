import styled from "styled-components";

export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  padding: 0 2rem;
  input {
    display: block;
    width: 100%;
    height: 3rem;
    padding: 0 24px;
    border: 0;
    border-bottom: 2px solid #0000f5;
    color: #3a3a3a;
    border-right: 0;
    outline: 0;
  }
  button {
    width: 100%;
    height: 3rem;
    background-color: #04d361;
    border-radius: 0.8rem;
    border: 0;
    color: #fff;
    font-weight: bold;
    &.hover {
        filter: opacity(1.25);
    }
  }
`;
