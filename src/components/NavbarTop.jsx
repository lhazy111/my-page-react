import React from 'react'
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'


const NavbarTop = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="text-dark shadow p-0 mt-5 rounded">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#certificates">Qualifications</Nav.Link>
                        <Nav.Link href="#projects_section">Projects</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarTop
