import React from 'react'
import { Row } from 'react-bootstrap'
import MsCertPro from './MsCertPro'
import MsCert from './MsCert'

const MsCertSet = ({ certpics }) => {
    //console.log(certpics)
    return (
        <>
            <MsCertPro
                cert={certpics[0]}
            />
            <Row className="pt-3">
                {certpics.map(cert => {
                    return cert.title !== "pro" ? <MsCert key={cert.id} src={cert.src} description={cert.description} alt={cert.alt} /> : null
                })}
            </Row>
        </>
    )
}
export default MsCertSet
