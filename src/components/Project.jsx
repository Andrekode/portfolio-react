import React from "react"
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material"

function Project({
    title,
    desc,
    imgSrc,
    imgAlt,
    livePage,
    githubRepo,
    logoCdns,
}) {
    const languageLogos = logoCdns
        .filter((language) => language.inProject)
        .map((logo) => {
            return <img key={logo.src} src={logo.src} alt={logo.alt} width="50" />
        })

    return (
        <Card sx={{ bgcolor: "primary.dark" }}>
            <CardMedia component="img" image={imgSrc} alt={imgAlt}></CardMedia>
            <CardContent>
                <Typography component="div" variant="h3" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body">{desc}</Typography>
                <CardContent>{languageLogos}</CardContent>
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
