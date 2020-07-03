import React from 'react'
import { Row, Col } from 'react-bootstrap'


const Divider = ({ sectionName, textColor }) => {
    const classes = [
        `display-3 d-inline-block text-${textColor}`,
        `divider-custom divider-${textColor}`,
        `divider-custom-line`]
    return (
        <>
            <Row>
                <Col>
                    <h1 className={classes[0]}>{sectionName}</h1>
                </Col>
                <Col sm={2} className="text-right">
                    <a className="btn btn-sm btn-warning rounded-pill p-0 m-0" href="#home-wrap">Home</a>
                </Col>
            </Row>

            <div>


            </div>
            <div className={classes[1]}>
                <div className={classes[2]}></div>
            </div>
        </>
    )
}

export default Divider
