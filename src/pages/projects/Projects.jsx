import React from 'react'
import Divider from '../../components/Divider'
import { Container, Row } from 'react-bootstrap'
import Project from './Project'
import projects from './projectsdata'
import pr0 from './img/weather.png'
import pr1 from './img/calc.png'
import pr2 from './img/pomodoro.png'
import pr3 from './img/drummachine.png'
import pr4 from './img/markup.png'
import pr5 from './img/quotemachine.png'
import pr6 from './img/bob.png'
import pr7 from './img/battleship.png'
import pr8 from './img/trivia.png'
import pr9 from './img/bg_genertor.png'
import pr10 from './img/s-list.png'
import pr11 from './img/weryk.png'
import pr12 from './img/landing.png'
import pr13 from './img/scratch.png'
import pr14 from './img/moriak.png'
const projectssrc = [pr0, pr1, pr2, pr3, pr4, pr5, pr6, pr7, pr8, pr9, pr10, pr11, pr12, pr13, pr14]
const classes = [
    `page-section mb-0 bg-info projects`,
    `text-white font-weight-light py-3`
]
const Projects = () => {
    console.log('projectsrc', projectssrc)
    return (
        <>
            <section className={classes[0]} id="projects_section">
                <Container >
                    <Divider sectionName="Projects" textColor="light" />
                    <p className={classes[1]}>
                        In this section I would like to present some of the projects created on my self-study way...
                    </p>
                    {/* <Image fluid src={projectssrc[2]} /> */}
                    <Row>
                        {projects.map(project => {
                            return <Project key={project.id} project={project} imgsrc={projectssrc[project.id]} />
                        })}
                    </Row>

                </Container>
            </section>
        </>
    )
}

export default Projects
