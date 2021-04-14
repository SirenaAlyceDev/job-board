import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem } from "reactstrap";
import Button from "@material-ui/core/Button";


function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Navbar  expand="md" fluid>
              <NavbarBrand href="/">Web App Name</NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <Button size="small" href="/">Login</Button>
                    </NavItem>
                    <NavItem>
                        <Button size="medium" href="/">Get Hired!</Button>
                    </NavItem>
                    <NavItem>
                        <Button size="medium" href="/">Find Talent!</Button>
                    </NavItem>
                </Nav>
              </Collapse>
          </Navbar>
    </div>
  );
}

export default Header;
