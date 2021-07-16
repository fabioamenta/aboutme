import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2em;

  @media only screen and (min-width: 560px) {
    flex-direction: row;
    align-items: stretch;
  }

  div:last-child {
    flex: 1;
    display: flex;
    align-items: center;

    p {
      margin: 0;
    }
  }
`;
