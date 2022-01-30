import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Divider from '../../components/Divider'
import certpics from './certpics'
import MsCertSet from './MsCertSet'
import MsCertPro from './MsCertPro'
const classes = [
    "page-section mb-0 bg-light certificates",
    "pt-5 d-flex justify-content-center",
    "shadow-sm zoom"]

const Certs = () => {
    return (
        <>
            <section className={classes[0]} id="certificates">
                <Container className="p-5">
                    <Divider
                        sectionName="Certificates"
                        textColor="dark"
                    />
                    <Row className={classes[1]}>
                        <Col md={7}>
                            <a href='https://www.credly.com/badges/7eef42d2-e873-448d-906c-2d923e4d5988'>
                                <Image fluid
                                    className={classes[2]} src={certpics[22].src}>
                                </Image>
                            </a>
                        </Col>
                    </Row>
                    <Row className={classes[1]}>
                        <Col>
                            <p>{certpics[22].description}</p>
                        </Col>
                    </Row>
                    <Row className={classes[1]}>
                        <Col md={7}>
                            <a href='https://www.credly.com/badges/029b9bdf-1574-407a-9bc6-09d5c346babf'>
                                <Image fluid
                                    className={classes[2]} src={certpics[21].src}>
                                </Image>
                            </a>
                        </Col>
                    </Row>
                    <Row className={classes[1]}>
                        <Col>
                            <p>{certpics[21].description}</p>
                        </Col>
                    </Row>
                    <Row className={classes[1]}>
                        <Col md={7}>
                            <a href='https://confirm.udacity.com/EQNNHDRL'>
                                <Image fluid
                                    className={classes[2]} src={certpics[20].src}>
                                </Image>
                            </a>
                        </Col>
                    </Row>
                    <Row className={classes[1]}>
                        <Col>
                            <p>{certpics[20].description1}</p>
                            <p>{certpics[20].description2}</p>
                            <p>{certpics[20].description3}</p>
                            <p>{certpics[20].description4}</p>
                            <p>{certpics[20].description5}</p>


                        </Col>
                    </Row>
                    <Row className={classes[1]}>
                        <Col md={7}>
                            <Image fluid
                                className={classes[2]} src={certpics[0].src}>
                            </Image>
                        </Col>
                    </Row>
                    <Row className={classes[1]}>
                        <Col>
                            <p>{certpics[0].description1}</p>
                            <p>{certpics[0].description2}</p>
                            <p>{certpics[0].description3}</p>
                        </Col>
                    </Row>
                    <MsCertSet certpics={certpics.filter(cert => cert.id > 0 && cert.id < 5)} />
                    <MsCertSet certpics={certpics.filter(cert => cert.id > 4 && cert.id < 9)} />
                    <MsCertSet certpics={certpics.filter(cert => cert.id > 8 && cert.id < 13)} />
                    <MsCertSet certpics={certpics.filter(cert => cert.id > 12 && cert.id < 17)} />
                    {certpics.map(cert => {
                        return cert.id > 16 && cert.id < 20 ? <MsCertPro key={cert.id} cert={cert} /> : null
                    })}
                </Container>
            </section>

        </>
    )
}
export default Certs