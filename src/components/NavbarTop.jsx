import React from 'react'
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'


const NavbarTop = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="text-dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Qualifications</Nav.Link>
                        <Nav.Link href="#pricing">Projects</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarTop
