import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Divider from '../../components/Divider'
import ProgressCard from './ProgressCard'
import progresscard from './progressdata.js'
import lifelong from '../InProgress/lifelong.png'


const InProgress = () => {
    const classes = [
        `bg-light py-5 progress_section`,
        `pt-5 px-2`
    ]
    return (
        <div>
            <section className={classes[0]} id="progress_section">
                <Container className="bg-light p-5">
                    <Divider
                        sectionName="In progress"
                        textColor="info" />

                    <Row className="d-flex justify-content-center">
                        <Col sm={4}>
                            <Image fluid src={lifelong} />
                            <p className="text-center font-light font-italic text-info">Life long learning...</p>
                        </Col>
                    </Row>

                    <Row>
                        {progresscard.map(card => {
                            return <ProgressCard key={card.id} data={card} />
                        })}
                    </Row>
                </Container>
            </section>

        </div>
    )
}

export default InProgress
