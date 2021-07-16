import styled from "styled-components";

export const BarStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: var(--color-text-dark);

  span {
    margin-top: 0.2em;
    color: var(--color-text);
  }

  svg {
    font-size: 4em;
  }
`;

export const Percentage = styled.div`
  margin: 1em 0;
  max-height: 8px;
  width: 60%;
  border-radius: 3px;
  background-color: var(--color-grey-skill);
  display: flex;
  align-items: center;
  color: var(--color-text);

  &::before {
    content: "";
    display: inline-block;
    height: 8px;
    max-width: ${(props) => props.percentage};
    background-color: var(--color-highlight);
    animation: slide 2s forwards;
    border-radius: 3px;
    margin-right: 0.2em;
  }
  /* 
  &::after {
    content: "${(props) => props.percentage}";
    display: inline-block;
    font-size: 0.8em;
  }
 */
  @keyframes slide {
    0% {
      width: 0%;
      flex-basis: 0%;
    }
    100% {
      width: 100%;
      flex-basis: 100%;
    }
  }
`;
