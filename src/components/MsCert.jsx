import React from 'react'
import { Col, Image } from 'react-bootstrap'


export default function MsCert({ lgPic, mdPic, src, alt, lgDes, mdDes, description }) {
    return (
        <>
            <Col lg={lgPic} md={mdPic}>
                <Image fluid className="shadow zoom" src={src} alt={alt} />
            </Col>
            <Col lg={lgDes} md={mdDes} className="d-flex align-items-center">
                <p className="p-2">{description}
                </p>
            </Col>
        </>
    )
}
