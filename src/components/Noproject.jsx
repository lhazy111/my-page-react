import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

const Noproject = ({ phrase }) => {
    return (
        <>
            <Container>
                <Jumbotron>
                    <h3 className="text-center text-danger">None of the projects contain phrase: {phrase}</h3>
                </Jumbotron>
            </Container>
        </>
    )
}

export default Noproject
