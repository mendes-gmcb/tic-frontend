import styled from "styled-components";

export const List = styled.ul`
  flex: 1;
  color: #0000f5;
  margin: 2vh 1rem 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  
  li {
    width: 100%;
    height: 4rem;

    display: flex;
    justify-content: start;
    align-items: center;
    padding: 2rem;
    
    border: 2px solid #0000f5;
    border-radius: .8rem;
  }
  
  a {
    text-decoration: none;
  }
`;

