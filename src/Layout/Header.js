import React, { useState, useContext } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { DiGithubBadge } from 'react-icons/di';

import { Link } from "react-router-dom";

import { UserContext } from "../Context/UserContext";

export default function Header() {

  const context = useContext(UserContext);

  const[isOp, setIsOp] = useState(false);

  const toggle = () => setIsOp(!isOp);
  
  return (
    
    <Navbar color="info" light expand="md">
      <NavbarBrand>
        <Link to="/" className="text-white">
         <DiGithubBadge></DiGithubBadge>  GitHub App
        </Link>
      </NavbarBrand>

    <NavbarText className="text-white">{context.user?.email ? context.user.email: "" }</NavbarText>

      <NavbarToggler onClick={toggle} ></NavbarToggler>
      <Collapse isOp={isOp} navbar>
        <Nav className="ml-auto" navbar>
          {
            context.user ? (
            <NavItem>
              <NavLink onClick={() => {context.setUser(null)} } className="text-white">Logout</NavLink>
            </NavItem>
            ) : (
              <>
            <NavItem>
               <NavLink tag={Link} to="/Sup" className="text-white">SignUp</NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/Sin" className="text-white">SignIn</NavLink>
            </NavItem>
            </>
            ) 
          }    
        </Nav>
      </Collapse>
    </Navbar>
  );
}
