import React, { useState } from "react";
import Butlo from './../button/loginlogout'
import Logo from './../Logo/image 110.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  Container,
  Col
} from "reactstrap";
import {
  FormControl,
  InputGroup,
  Modal
} from "react-bootstrap";

const Header = props => {
  const toggle = () => setIsOpen(!isOpen);
  const [isOpen, setIsOpen] = useState(false);

  const [menShow, setMenShow] = useState(false);
  const [womenShow, setWomenShow] = useState(false);
  const [kidsShow, setKidsShow] = useState(false);
  const [homeShow, setHomeShow] = useState(false);
  const [profileShow, setProfileShow] = useState(false);

  return (
    <div>
      <Navbar light expand="md" className="nav-bar123 nav-bar" style={{backgroundColor: "orange"}}>
        <NavbarBrand href="/">
          <img className="brand" src={Logo} alt="a1" />                               
            
          <b style={{color:'white'}}>Gift Shop</b>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />  
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="navmw" onMouseOver={() => setMenShow(true)} onMouseOut={() => setMenShow(false)} >
              <NavLink className="links"></NavLink>
            </NavItem>
            <NavItem className="navmw" onMouseOver={() => setWomenShow(true)} onMouseOut={() => setWomenShow(false)}>
              <NavLink className="links"></NavLink>
            </NavItem>
            <NavItem className="navmw" onMouseOver={() => setKidsShow(true)} onMouseOut={() => setKidsShow(false)} >
              <NavLink className="links"></NavLink>
            </NavItem>
            <NavItem className="navmw" onMouseOver={() => setHomeShow(true)} onMouseOut={() => setHomeShow(false)} >
              <NavLink className="links"></NavLink>
            </NavItem>
            <NavItem className="search">
            <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1"><i className="fa fa-search" aria-hidden="true"></i></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl className="searchbor" placeholder="Search For Products, brands and More" aria-label="Username" aria-describedby="basic-addon1"/>
            </InputGroup>
            </NavItem>
            <NavItem className="logos" onMouseOver={() => setProfileShow(true)} onMouseOut={() => setProfileShow(false)} >
            <h4 style={{color:'white'}}>login</h4>
            </NavItem>
            
            <NavItem className="logos">
              <a href="/cart">
              <h4 style={{color:'white'}}>Cart</h4>
              </a>
            </NavItem>
          </Nav>
          </Collapse>
      </Navbar>
      <Modal
        className="modal123"
        onMouseOver={() => setMenShow(true)}
        onMouseOut={() => setMenShow(false)}
        size="lg"
        show={menShow}
        aria-labelledby="example-modal-sizes-title-sm">
        
      </Modal>
      <Modal
        className="modal123pro"
        onMouseOver={() => setProfileShow(true)}
        onMouseOut={() => setProfileShow(false)}
        size="sm"
        show={profileShow}
        aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Body>
         <Butlo />
         <hr />
         {/* <a href="/cart/order">Orders</a><br />
         <a href="/cart/whislist">wishlist</a><br />
         <a href="/">Gift Cards</a><br />
         <a href="/">Contact Us</a><br />
         <a href="/">Myntra Insider</a><br />
         <hr />
         <a href="/">Myntra Credit</a><br />
         <a href="/">Coupons</a><br />
         <a href="/">Saved Cards</a><br />
         <a href="/">Saved Addresses</a><br /> */}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Header;