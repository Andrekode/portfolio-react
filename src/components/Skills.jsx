import { Box, Typography, Grid } from "@mui/material"
import { cdnLogoUrls } from "../const/cdnLogoUrls"

export default function Skills() {
    return (
        <Box sx={{ width: "100%" }}>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
            >
                {cdnLogoUrls.map((logo) => (
                    <Grid item xs={4} md={2} key={logo.alt}>
                        <img src={logo.src} alt={logo.alt} key={logo.src} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

// <div className="about-myskill">
//     <h3 className="about-myskill__title">Skills</h3>
//     <div className="about-myskill-box">
//         <img
//             className="about-myskill-box__img"
//             src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
//             alt="Logo Html5"
//         />
//     </div>
