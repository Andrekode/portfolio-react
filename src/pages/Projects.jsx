import React from "react"
import { projectsObject } from "../utils/projectsObject"
import Project from "../components/Project"
import ContentHeader from "../components/ContentHeader"
import { pageContent } from "../const/pageContent"
import { Grid, Box } from "@mui/material"

function Projects() {
    const { title, subtitle } = pageContent[1]

    const allProjects = projectsObject.map((project) => {
        return (
            <Grid item  xs={8} md={4}>
                <Project
                    key={project.id}
                    title={project.title}
                    desc={project.desc}
                    imgSrc={project.imgSrc}
                    imgAlt={project.alt}
                    livePage={project.livePage}
                    githubRepo={project.githubRepo}
                    logoCdns={project.languageLogoCdns}
                />
            </Grid>
        )
    })
    return (
        <Box component="section" minHeight="100vh" p='0.5em'>
            <ContentHeader title={title} subtitle={subtitle} />
            <Box
                component="div"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Grid container spacing={2}  justifyContent='center'>
                    {allProjects}
                </Grid>
            </Box>
        </Box>
    )
}

export default Projects
