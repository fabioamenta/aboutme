import React from "react";
import { bool, func } from "prop-types";
import { NavLink } from "react-router-dom";

import { NavbarStyle as Aside } from "./Navbar.styled";
import { ListStyle as List } from "../List/List.styled";

const Navbar = ({ open, setOpen }) => (
  <Aside open={open}>
    <List direction="column" type="nav">
      <li>
        <NavLink exact to="/" onClick={() => setOpen(!open)}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/experiences" onClick={() => setOpen(!open)}>
          Experiences
        </NavLink>
      </li>
      <li>
        <NavLink to="/education" onClick={() => setOpen(!open)}>
          Training
        </NavLink>
      </li>
      <li>
        <NavLink to="/skills" onClick={() => setOpen(!open)}>
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" onClick={() => setOpen(!open)}>
          Contact me
        </NavLink>
      </li>
    </List>
  </Aside>
);

Navbar.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Navbar;
