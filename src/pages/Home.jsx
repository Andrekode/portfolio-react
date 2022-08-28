import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Box, Stack, Typography } from '@mui/material'

function Home() {
    return (
        <Box component="section" sx={{ bgcolor: 'primary.light'}}>
            <Stack
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <Box component="div">
                    <Typography variant="h1" color="#ffffff">Hey, I'm Andrè Mæland</Typography>
                </Box>
                <Box component="div">
                    <Typography variant="p" color="#ffffff"  sx={{margin: '0'}} >
                        Full-Stack Web Developer
                    </Typography>
                </Box>
                <Box component="p" mb="2em" >
                    <Typography variant="p" color="#ffffff">Loving all things</Typography>
                    <Typography variant="span">&#123;</Typography>
                    <Typography variant="span">code</Typography>
                    <Typography variant="span">&#125;</Typography>
                </Box>
                <Button variant="contained" component={NavLink} to="/projects">
                    Projects
                </Button>
            </Stack>
        </Box>
    )
}

export default Home
