import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import MsCert from './MsCert'
import certs from './certpics'

export default function MsCertSet() {
    return (
        <>
            <Row className="pt-5 text-small text-monospace">
                <MsCert
                    lgPic={5}
                    mdPic={7}
                    src={certs[1].src}
                    alt={certs[1].alt}
                    lgDes={7}
                    mdDes={5}
                    description={certs[1].description}
                />
            </Row>
            <Row className="pt-3 text-small text-monospace">
                <Col lg={4} md={6}>
                    <Image fluid src={certs[2].src} className="shadow  zoom" alt="..." />
                    <p className="p-2">{certs[2].description}
                    </p>
                </Col>
                <Col lg={4} md={6} >
                    <Image fluid src={certs[3].src} className="shadow  zoom" alt="..." />
                    <p className="p-2">{certs[3].description}</p>
                </Col>
                <Col lg={4} md={6}>
                    <Image fluid src={certs[4].src} className="shadow zoom" alt="..." />

                    <p className="p-2">{certs[4].description}</p>
                </Col>
            </Row>
        </>
    )
}
