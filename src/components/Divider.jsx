import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-scroll'


const Divider = ({ sectionName, textColor }) => {
    const classes = [
        ` d-inline-block text-${textColor}`,
        `divider-custom divider-${textColor}`,
        `divider-custom-line`]
    return (
        <>
            <Row>
                <Col xs={10}>
                    <h1 className={classes[0]}>{sectionName}</h1>
                </Col>
                <Col xs={2} className="text-right">
                    <Link
                        to="home-wrap"
                        smooth={true}
                        duration={1000}
                        className="btn btn-sm btn-warning p-1 m-0" >
                        Home
                    </Link>

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
