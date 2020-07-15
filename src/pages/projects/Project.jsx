import React from 'react'
import { Col, Image, Card } from 'react-bootstrap'

const classes = [
    `px-4 py-4`,
    `bg-light text-info shadow-lg h-100 project-card`,
    `p-3`,
    `font-weight-light`,
    `mb-2 text-muted`,
    `p-3 project-description`,
    'font-weight-light font-italic text-small',
    `pt-4 text-center project-card-button`,
    `btn btn-sm btn-info text-small mb-3 btn-project`
]

const Project = ({ project, imgsrc }) => {

    return (
        <>
            <Col lg={4} md={6} className={classes[0]}>
                <Card
                    className={classes[1]}
                >
                    <Card.Title className={classes[2]}>
                        <h3 className={classes[3]}>{project.title}</h3>
                        <p className={classes[4]}>{project.subtitle}</p>
                    </Card.Title>
                    <Image fluid src={imgsrc} alt="Card" />
                    <div className={classes[5]}>
                        <p className={classes[6]}>{project.description}</p>
                    </div>
                    <div className={classes[7]}>
                        <a className={classes[8]}
                            href={project.prlink} role="button">Try</a>
                    </div>

                </Card>
            </Col>
        </>
    )
}

export default Project
