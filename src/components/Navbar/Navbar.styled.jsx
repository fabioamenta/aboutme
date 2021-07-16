import styled from "styled-components";

export const NavbarStyle = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  z-index: 2;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  background-color: rgba(0, 0, 0, 0.8);

  li a {
    font-size: 1.8em;
    font-weight: 500;
    text-transform: uppercase;
    font-family: "Dosis", sans-serif;
  }
`;
