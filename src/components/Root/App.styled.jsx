import styled from "styled-components";

export const Root = styled.div`
  width: 100%;
  padding-bottom: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;

  @media only screen and (min-width: 992px) {
    margin: 2em auto;
  }
`;
