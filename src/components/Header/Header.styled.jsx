import styled from "styled-components";
import background from "../../img/background.svg";

export const Header = styled.header`
  width: 100%;
  min-height: 220px;
  display: flex;
  padding: 1.1em 2em;
  background-color: var(--color-blue-light);
  background-image: url(${background});
  background-position: 100% -60%;
  background-size: 141%;
  background-repeat: no-repeat;
  margin-bottom: 3em;

  @media only screen and (min-width: 992px) {
    border-top-left-radius: 0.6em;
    border-top-right-radius: 0.6em;
    position: relative;
  }

  h1 {
    margin: 0 0 0 1.5em;
    padding: 0;
    color: var(--color-bg-canvas);
    font-size: 2em;
  }
`;
