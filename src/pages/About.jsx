import React from "react"
import ContentHeader from "../components/ContentHeader"
import { pageContent } from "../const/pageContent"
import { Box, Typography, Grid } from "@mui/material"
import Skills from "../components/Skills"

function About() {
    const { title, subtitle } = pageContent[0]

    return (
        <Box component="section" minHeight="100vh" p="0.5em" sx={{bgcolor: 'primary.light'}}>
            <ContentHeader title={title} subtitle={subtitle} />
            <Box
                component="div"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Grid container wrap="wrap" spacing={5} maxWidth="90%">
                    <Grid item xs={12} md={6}>
                        <Typography varian="h3" mb="2em">
                            Me
                        </Typography>
                        <Typography variant="p">
                            From young age I've always been interested in
                            anything computer related, from software to
                            hardware. With curiosity's drive I love to find
                            solutions to problems in anything I should come
                            over. from Linux to modifying games or debugging.
                        </Typography>
                        <Typography variant="p">
                            At the moment I'm a participant in Kodehode, an IT
                            AMO-course where I work to become a Full-Stack
                            Developer
                        </Typography>
                        <Typography variant="p">
                            I like to learn new things and stay updated with
                            programming trends. If I don't code i like to game,
                            currently playing a bit of Lost Ark, other than that
                            I like to lift weights.
                        </Typography>
                    </Grid>
                    <Grid item xs={8} md={6}>
                        <Typography component="h3" mb="2em">
                            Skills
                        </Typography>
                        <Skills />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default About
