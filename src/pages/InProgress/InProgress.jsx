import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Divider from '../../components/Divider'
import ProgressCard from './ProgressCard'
import progresscard from './progressdata.js'


const InProgress = () => {
    const classes = [
        `grad2 page-section mb-0  progress_section`,
        `pt-5 px-2`
    ]
    return (
        <div>
            <section className={classes[0]} id="progress_section">
                <Container>
                    <Divider
                        sectionName="in progress"
                        textColor="primary" />
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
