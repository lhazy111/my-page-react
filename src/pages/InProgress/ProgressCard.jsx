import React from 'react'
import { Col, Card, ProgressBar } from 'react-bootstrap'

const ProgressCard = ({ data }) => {

    return (
        <>
            <Col lg={3} md={6} className="pt-5 px-2">
                <Card className="h-100 zoom">
                    <Card.Img src={data.src} />
                    <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text className="text-small">
                            {data.text}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <ProgressBar
                            className=""
                            variant="info"
                            now={data.label}
                            label={`${data.label}%`}
                        />
                    </Card.Footer>
                </Card>
            </Col>
        </>
    )
}

export default ProgressCard
