import React from 'react'
import { Row } from 'react-bootstrap'
import MsCertPro from './MsCertPro'
import MsCert from './MsCert'

export default function MsCertSet({ certpics }) {
    console.log(certpics)
    return (
        <>
            <MsCertPro
                src={certpics[0].src}
                alt={certpics[0].alt}
                description={certpics[0].description}
            />
            <Row className="pt-3 text-small text-monospace">
                {certpics.map(cert => {
                    return cert.title !== "pro" ? <MsCert src={cert.src} description={cert.description} alt={cert.alt} /> : null
                })}
            </Row>
        </>
    )
}
