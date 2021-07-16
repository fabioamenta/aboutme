import styled from "styled-components";

export const PhotoStyle = styled.div`
  border-radius: 0.6em;
  overflow: hidden;
  position: relative;
  width: 100%;
  margin: 0 0 2em 0;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.2);

  @media only screen and (min-width: 560px) {
    margin: 0 2em 0 0;
    max-width: 300px;
  }

  @media only screen and (min-width: 992px) {
    max-width: 200px;
  }

  &::before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  img {
    position: absolute;
    top: 56%;
    left: 55%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 115%;
    max-height: 115%;
  }
`;
