import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-scroll'


const Divider = ({ sectionName, textColor }) => {
    const classes = [
        `d-inline-block text-${textColor}`,
        `divider-custom divider-${textColor}`,
        `divider-custom-line bg-primary`]
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
                        className="btn btn-sm btn-primary p-1 m-0" >
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                        </svg>
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
