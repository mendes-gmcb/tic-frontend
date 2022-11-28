import styled from "styled-components";

export const Tasks = styled.ul`
  flex: 1;
  color: #0000f5;
  margin: 2vh 1rem 0;
  list-style: none;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 1rem;

  li {
    width: 100%;
    max-width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ebebeb;
    padding: 1rem 0;

    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      outline: 0;
      overflow-x: scroll;

      p {
        width: 5rem;
        font-size: 1rem;
        color: #0000f5;
        text-align: center;
      }

      &.completed {
        p {
          text-decoration: line-through;
          opacity: 0.6;
        }
      }

      label {
        display: flex;
        position: relative;
        padding-left: 14px;
        margin-bottom: 16px;
        margin-right: 16px;

        input {
          display: none;
          position: absolute;
          opacity: 1;
          cursor: pointer;
          height: 1.2rem;
          width: 1.2rem;

          ~ span {
            border: 1px solid #0000f5;
          }

          &:checked {
            & ~ span {
              background-color: #0000f5;
              border: 0;
            }

            & ~ span:after {
              display: block;
            }
          }
        }

        span {
          position: absolute;
          top: 0;
          left: 0;
          width: 16px;
          height: 16px;
          border-radius: 2px;

          &:after {
            content: "";
            position: absolute;
            display: none;
            left: 6px;
            top: 3px;
            width: 3px;
            height: 6px;
            border: solid white;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
          }
        }
      }
    }

    button {
      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`;
