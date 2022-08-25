import React from 'react'
import { projectsObject } from '../utils/projectsObject'
import Project from '../components/Project'

function Projects() {
    const allProjects = projectsObject.map((project) => {
        return (
            <Project
                key={project.id}
                title={project.title}
                desc={project.desc}
                imgSrc={project.imgSrc}
                livePage={project.livePage}
                githubRepo={project.githubRepo}
                logoCdns={project.languageLogoCdns}
            />
        )
    })
    return (
        <section className="projects pad" id="projects">
            <div className="projects-head">
                <h2 className="project-head__title">Projects</h2>
                <p className="project-head__subtitle">
                    These are some of the projects I've done.
                </p>
                <div className="projects-content">{allProjects}</div>
            </div>
        </section>
    )
}

export default Projects
