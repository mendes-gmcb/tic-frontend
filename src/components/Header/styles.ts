import styled from 'styled-components'

export const Navegacao = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #0000f5;
    height: 10vh;
    ul {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        
        list-style: none;
        li {
            display: flex;
            justify-content: center;
            align-items: center;
            /* padding-right: 50px;s */
            a {
                display: flex;
                justify-content: center;
                align-items: center;

                color: #f6f6f6;
                text-decoration: none;
            }
        }
    }     
` 


