import React from 'react'
import { Col, Image } from 'react-bootstrap'


const MsCert = ({ src, alt, description }) => {
    return (
        <>
            <Col lg={4} md={6}>
                <Image fluid className="shadow zoom" src={src} alt={alt} />
                <p className="mt-4 p-2">{description}</p>
            </Col>
        </>
    )
}
export default MsCert