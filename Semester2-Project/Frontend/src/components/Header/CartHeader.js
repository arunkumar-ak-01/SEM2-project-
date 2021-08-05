import React, { useState } from 'react'
//import Logo from './../Logo/main-qimg-e748b8006c86f5be09002f018a4e37ab.png';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";

export default function CartHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const Header = () => {
        if (window.location.pathname === '/cart/address') {
            return (
                <React.Fragment>
                    <NavItem>
                        <NavLink href="/cart" style={{ fontSize: "15px", color: "#f76767", fontWeight: "700" }}>BAG AND PAYMENT</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ fontSize: "15px", color: "#f76767", fontWeight: "700" }}>----</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/cart/address" style={{ fontSize: "15px", color: "#f76767", fontWeight: "700" }}>ADDRESS</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ fontSize: "15px", color: "gray", fontWeight: "700" }}>----</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/cart/order" style={{ fontSize: "15px", color: "gray", fontWeight: "700" }}>SHOW ORDER</NavLink>
                    </NavItem>
                </React.Fragment>
            )
        }
        else if (window.location.pathname === '/cart') {
            return (
                <React.Fragment>
                    <NavItem>
                        <NavLink href="/cart" style={{ fontSize: "15px", color: "#f76767", fontWeight: "700"}}>BAG</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ fontSize: "15px", color: "gray", fontWeight: "700" }}>----</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ fontSize: "15px", color: "gray", fontWeight: "700" }}>ADDRESS</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ fontSize: "15px", color: "gray", fontWeight: "700" }}>----</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/cart/order" style={{ fontSize: "15px", color: "gray", fontWeight: "700" }}>ORDER</NavLink>
                    </NavItem>
                </React.Fragment>
            )
        }
        else if (window.location.pathname === '/cart/order') {
            return (
                <React.Fragment>
                    <NavItem>
                        <NavLink style={{ fontSize: "15px", color: "#f76767", fontWeight: "700" }}>BAG</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ fontSize: "15px", color: "#f76767", fontWeight: "700" }}>----</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ fontSize: "15px", color: "#f76767", fontWeight: "700" }}>ADDRESS</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ fontSize: "15px", color: "#f76767", fontWeight: "700" }}>----</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ fontSize: "15px", color: "#f76767", fontWeight: "700" }}>ORDER</NavLink>
                    </NavItem>
                </React.Fragment>
            )
        }

    }

    return (
        <React.Fragment>
            <Navbar light expand="md" className="nav-bar123 nav-bar">
                <NavbarBrand href="/">
                    <img className="brand" src='https://scontent.cdninstagram.com/v/t51.29350-15/200155597_756484791713031_8650082405416577174_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=jZtlQWPerHIAX9oEhPk&_nc_ht=scontent.cdninstagram.com&oh=5ecf591215211ebff01f1241dadf948d&oe=60D0E8D3' alt="a1" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" style={{ paddingLeft: "37%" }} navbar>
                      {Header()}
                    </Nav>
                </Collapse>
            </Navbar>
        </React.Fragment>
    )
}
