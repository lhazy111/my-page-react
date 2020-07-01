import React from 'react'
import Divider from '../../components/Divider'
import { Container, Row } from 'react-bootstrap'
import { Paper } from '@material-ui/core';
import Project from './Project'
import projects from './projectsdata'
const classes = [
    `page-section mb-0 bg-info projects`,
    `text-white font-weight-light py-3`
]

const Projects = () => {
    return (
        <>
            <section className={classes[0]} id="projects_section">
                <Container >
                    <Divider sectionName="projects" textColor="light" />
                    <p className={classes[1]}>
                        In this section I would like to present some of the projects created on my self-study way...
                    </p>
                    <Row>
                        {projects.map(project => {
                            return <Project key={project.id} project={project} />
                        })}
                    </Row>

                </Container>
            </section>
        </>
    )
}

export default Projects
