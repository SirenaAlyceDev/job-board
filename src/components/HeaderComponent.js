import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import Button from "@material-ui/core/Button";
import { NavLink } from 'react-router-dom';



function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <div>
        <Navbar expand="md" fluid>
          <NavbarBrand href="/">Seekaty</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/login">
                  <Button size="small">Login</Button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/applicant-signup">
                  <Button size="medium">Get Hired!</Button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/employer-signup">
                  <Button size="medium">Find Talent!</Button>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </div>
  );
}

export default Header;

