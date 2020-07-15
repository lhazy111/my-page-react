import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'


const MsCertPro = ({ cert }) => {
    return (
        <>
            <Row className="py-5">
                <Col lg={4} md={6}>
                    <Image fluid className="shadow zoom" src={cert.src} alt={cert.alt} />
                </Col>
                <Col lg={6} md={4} className="d-flex align-items-center">
                    <p className="p-2">{cert.description}</p>
                </Col>
            </Row>
        </>
    )
}
export default MsCertPro
