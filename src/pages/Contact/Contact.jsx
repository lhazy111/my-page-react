import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Divider from '../../components/Divider'

const Contact = () => {
    const classes = [
        `page-section mb-0 pb-0 bg-info`,
        `ml-3 text-info`
    ]
    return (
        <>
            <section className={classes[0]} id="contact-me">
                <Container className="bg-info p-5">
                    <Divider
                        sectionName="Contact"
                        textColor="white" />
                    <Row className="justify-content-center pt-5">
                        <Col lg={4}>
                            <div className="d-flex flex-column align-items-center">
                                <div className="text-white bg-info"><i className="fas fa-mobile-alt fa-3x"></i></div>
                                <div className="text-white">Phone</div>
                                <div className="text-white">+44 77160-44-683</div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="d-flex flex-column align-items-center">
                                <div className="text-white bg-info"><i className="far fa-envelope fa-3x"></i></div>
                                <div className="text-white">Email</div>
                                <a className="text-white" href="mailto:lhazy111@gmail.com">lhazy111@gmail.com</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <footer className="bg-info text-center py-5">
                <Container className="">
                    <Row>
                        <Col>
                            <a className="text-white mx-5 " href="https://github.com/lhazy111">
                                <i className="fab fa-github fa-3x"></i>
                            </a>
                            <div className="text-white">Github</div>

                        </Col>
                        <Col>
                            <a className="text-white mx-5" href="https://www.linkedin.com/in/lukasz-hazy/">
                                <i className="fab fa-linkedin-in fa-3x"></i>
                            </a>
                            <div className="text-white">LinkedIn</div>
                        </Col>
                        <Col>
                            <a className="text-white mx-5" href="https://api.whatsapp.com/send?phone=447716044683">
                                <i className="fab fa-whatsapp fa-3x"></i>
                            </a>
                            <div className="text-white">Whatsapp</div>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <section className="copyright py-4 text-center bg-info">
                <div className="container"><small className="bg-info text-light">Copyright © &lt;_Lou/&gt; 2020
            </small></div>
            </section>
        </>
    )
}

export default Contact
