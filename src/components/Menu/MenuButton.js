import React from "react";
import { bool, func } from "prop-types";
import { MenuButtonStyle as ButtonStyled } from "./Menu.styled";

const MenuButton = ({ open, setOpen }) => {
  return (
    <ButtonStyled open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </ButtonStyled>
  );
};

MenuButton.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default MenuButton;
