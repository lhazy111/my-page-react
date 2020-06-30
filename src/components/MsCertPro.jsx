import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'


export default function MsCertPro({ src, alt, description }) {
    return (
        <>
            <Row className="pt-5 text-small text-monospace">
                <Col lg={5} md={7}>
                    <Image fluid className="shadow zoom" src={src} alt={alt} />
                </Col>
                <Col lg={7} md={5} className="d-flex align-items-center">
                    <p className="p-2">{description}</p>
                </Col>
            </Row>
        </>
    )
}
