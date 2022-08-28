import React from "react"
import { Grid } from "@mui/material"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Project({ title, desc, imgSrc, imgAlt, livePage, githubRepo, logoCdns }) {
    const languageLogos = logoCdns
        .filter((language) => language.inProject)
        .map((logo, i) => {
            return (
                <img
                    key={i}
                    src={logo.src}
                    alt={logo.alt}
                    width='50'
                />
            )
        })

    return (
        <Card sx={{bgcolor: 'primary.dark'}}>
            <CardMedia component='img' image={imgSrc} alt={imgAlt}>
            </CardMedia>
            <CardContent >
                <Typography component='div' variant='h3' gutterBottom>{title}</Typography>
                <Typography variant='body'>{desc}</Typography>
        <CardContent >
                {languageLogos}
        </CardContent>
                {githubRepo && (
                    <a
                        className="project-desc__link"
                        href={githubRepo}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </a>
                )}
                {livePage && (
                    <a
                        className="project-desc__link"
                        href={livePage}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Live Github
                    </a>
                )}
            </CardContent>
        </Card>
    )
}

export default Project
