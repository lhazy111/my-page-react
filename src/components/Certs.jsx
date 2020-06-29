import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
//import msoftMain from '../img/certs/elsd.png'
import { Divider } from './Divider'
import certs from './certpics'
import MsCertSet from './MsCertSet'

export const Certs = () => {
    return (
        <div>
            <section className="grad1 page-section mb-0 bg-secondary certificates" id="certificates">
                <Container>
                    <Divider
                        sectionName="Certificates"
                        textColor="dark"
                    />
                    <Row className="pt-5 text-monospace font-small d-flex justify-content-center">
                        {/* <!-- Certificates Items--> */}
                        <Col md={7}>
                            <a href="https://academy.microsoft.com/en-us/certificates/81f06e86-f149-4066-aa44-bceec7912b7d">
                                <Image fluid
                                    className="shadow-sm zoom" src={certs[0].src}>
                                </Image>
                            </a>
                        </Col>
                    </Row>
                    <Row className="pt-5 text-monospace text-small d-flex justify-content-center">
                        <Col>
                            <p>
                                The Microsoft Professional Program is an industry-driven online learning program from
                                Microsoft
                                that teaches conceptual skills and provides hands-on experience.
                            </p>
                            <p>
                                The Microsoft Entry Level Software Development track exists of 13 steps to learn the basic
                                skills
                                of a software developers. It teaches how to think logically and systematically through
                                creating
                                basic programs, developing interactive webpages, and
                                understanding how to keep the user in mind in design, as well as analyzing algorithms and
                                data
                                for efficiency.
                            </p>
                            <p>
                                To earn this certificate from the Microsoft
                                Professional Program, graduates earned passing scores from a rigorous curriculum that
                                included
                                activities like online video lectures, hands-on labs, exams, and assessments.
                            </p>
                        </Col>
                    </Row>
                    <MsCertSet />
                </Container>
            </section>

        </div>
    )
}
