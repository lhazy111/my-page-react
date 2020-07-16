import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from "react-scroll";


const NavbarTop = () => {
    return (
        <>
            <Navbar className="text-dark shadow p-0   mt-3 ">
                <Nav className="d-flex flex-column flex-sm-row " id="navbar">
                    <Nav.Item className="">
                        <Link
                            className="btn btn-block"
                            to="about-me"
                            spy={true}
                            smooth={true}
                            duration={1000}
                        >About</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link
                            className="btn btn-block"
                            to="certificates"
                            spy={true}
                            smooth={true}
                            duration={1000}>
                            Qualifications
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link
                            className="btn btn-block"
                            to="projects_section"
                            spy={true}
                            smooth={true}
                            duration={1000}>
                            Projects
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link
                            className="btn btn-block"
                            to="contact-me"
                            spy={true}
                            smooth={true}
                            duration={1000}>
                            Contact
                        </Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </>
    )
}

export default NavbarTop
