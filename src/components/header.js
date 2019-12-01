import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
   } from 'reactstrap';
  import 'bootstrap/dist/css/bootstrap.css';
  import logo from '../images/logo.PNG';
  import { Link } from 'react-scroll';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" position="static" fixed={`top`}>
        <NavbarBrand href="/"><img alt="" src = {logo} style={{height:"220px", width:"250px", marginTop:"-75px" , marginBottom:"-75px", marginLeft:"-50px"}}/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
>
                Home
                </Link>
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
            >
                About Us
                </Link>
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
            >
              Services
              </Link>
              </NavLink>
            </NavItem>
            
           
            <NavItem>
              <NavLink href="#">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
            >
              Contact Us
              </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;