import React from 'react'
import { Image, Container, Row, Col } from 'react-bootstrap'
import avatar from './avataaars.png';
import logo from './loulogo.png'
import NavbarTop from '../../components/NavbarTop';


const HeaderTop = () => {
    return (
        <>
            <Container fluid id="home-wrap">
                <Row className="h-100">
                    <Col className="d-flex align-items-center justify-content-center flex-column home-left shadow">
                        <Image fluid id="home-logo" src={logo} />

                    </Col>
                    <Col className="home-right">
                        <Row className="d-flex justify-content-around shadow">
                            <NavbarTop />
                        </Row>
                        <Row className="h-100 pt-5">
                            <Col className="d-flex flex-column align-items-center justify-content-around">
                                <div>
                                    <Image fluid id="home-avatar" src={avatar} />
                                    <h1 className="masthead-heading text-center mb-0">Welcome</h1>
                                </div>
                                <p className="pre-wrap masthead-subheading font-weight-light mb-0">HTML_CSS_JS_BOOTSTRAP_REACT...</p>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HeaderTop
