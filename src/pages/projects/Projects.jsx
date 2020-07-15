import React from 'react'
import { useState } from 'react'
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
import Noproject from '../../components/Noproject'
const projectssrc = [pr0, pr1, pr2, pr3, pr4, pr5, pr6, pr7, pr8, pr9, pr10, pr11, pr12, pr13, pr14]
const classes = [
    `py-5 mb-0 bg-light projects`,
    `text-info  py-3`
]
const Projects = () => {
    const [projectsFilter, setProjectsFilter] = useState('')
    const handleChange = (e) => {
        setProjectsFilter(e.target.value)
    }
    let projectsToShow = projects.filter(project => {
        let projectData = (project.title + project.subtitle + project.description).toLowerCase()
        if (projectData.includes(projectsFilter.toLowerCase())) {
            return project
        }
        return null
    })
    return (
        <>
            <section className={classes[0]} id="projects_section">
                <Container>
                    <Divider sectionName="Projects" textColor="info" />
                    <p className={classes[1]}>
                        In this section I would like to present some of the projects created on my self-study way...
                    </p>
                    <p className="text-info">Also this site is one of them and is made with React</p>
                    <p className="text-info">Filter them using any phrase included in title, subtitle or description</p>
                    <input className="my-4" value={projectsFilter} onChange={(e) => { handleChange(e) }} placeholder="any phrase to filter"></input>
                    {/* <Image fluid src={projectssrc[2]} /> */}
                    <Row>
                        {projectsToShow.length > 0 ?
                            projectsToShow.map(project => {
                                return <Project key={project.id} project={project} imgsrc={projectssrc[project.id]} />
                            }
                            ) :
                            <Noproject phrase={projectsFilter} />}
                    </Row>

                </Container>
            </section>
        </>
    )
}

export default Projects
