import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Divider from '../../components/Divider'

const About = () => {
    const classes = [
        `page-section mb-0 bg-info`,
        `ml-3`
    ]
    return (
        <div>
            <section className={classes[0]} id="about-me">
                <Container className="bg-danger p-5 rounded section-shadow">
                    <Divider
                        sectionName="About me"
                        textColor="secondary" />
                    <Row >
                        <Col lg={8} className={classes[1]}>
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
