import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Divider } from './Divider'

const About = () => {
    return (
        <div>
            <section className="page-section mb-0" id="about">
                <Container>
                    <Divider
                        sectionName="about me"
                        textColor="secondary" />
                    {/* <!-- About Section Content--> */}
                    <Row>
                        <Col lg={8} className="ml-3">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
                                doloribus architecto dicta laudantium quidem non dolorem facere voluptatem quia, obcaecati
                                excepturi perspiciatis? Sunt, aspernatur eligendi delectus dignissimos asperiores voluptatem
                                recusandae numquam laudantium dolor facilis reprehenderit vitae, officia repellendus! Fugiat
                                dolorem consectetur minima doloribus velit debitis quibusdam maiores ea id sint!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
                                doloribus architecto dicta laudantium quidem non dolorem facere voluptatem quia, obcaecati
                                excepturi perspiciatis? Sunt, aspernatur eligendi delectus dignissimos asperiores voluptatem
                                recusandae numquam laudantium dolor facilis reprehenderit vitae, officia repellendus! Fugiat
                                dolorem consectetur minima doloribus velit debitis quibusdam maiores ea id sint!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
                                doloribus architecto dicta laudantium quidem non dolorem facere voluptatem quia, obcaecati
                                excepturi perspiciatis? Sunt, aspernatur eligendi delectus dignissimos asperiores voluptatem
                                recusandae numquam laudantium dolor facilis reprehenderit vitae, officia repellendus! Fugiat
                                dolorem consectetur minima doloribus velit debitis quibusdam maiores ea id sint!
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default About
