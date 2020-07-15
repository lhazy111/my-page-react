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
                            <a href="https://academy.microsoft.com/en-us/certificates/81f06e86-f149-4066-aa44-bceec7912b7d">
                                <Image fluid
                                    className={classes[2]} src={certpics[0].src}>
                                </Image>
                            </a>
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