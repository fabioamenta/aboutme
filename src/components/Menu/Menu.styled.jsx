import styled from "styled-components";

export const MenuButtonStyle = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  margin: 2em;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) =>
      open ? "var(--color-text-dark)" : "var(--color-bg-canvas)"};
    border-radius: 10px;
    transition: all 300ms linear;
    /* transition-delay: 300ms; */
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  &:hover {
    div {
      background-color: ${({ open }) =>
        open ? "var(--color-text-light)" : "var(--color-highlight)"};
    }
  }
`;
