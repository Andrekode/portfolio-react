import { createTheme } from "@mui/material/styles"

const theme = createTheme()

theme.typography.h1 = {
    fontSize: "1.5rem",
    letterSpacing: 1,
    [theme.breakpoints.up("md")]: {
        fontSize: "2.4rem",
    },
}
theme.typography.h2 = {
    fontSize: '1.5rem',
    letterSpacing: 1,
    [theme.breakpoints.up("md")]: {
        fontSize: "2rem",
    },
}
theme.typography.h3 = {
    fontSize: '1.5rem,',
    [theme.breakpoints.up("md")]: {
        fontSize: "2rem",

    },
}
theme.typography.p = {
    fontSize: '1rem',
    lineHeight: 2,
    letterSpacing: 2,
}

export default theme
