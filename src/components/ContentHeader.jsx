import { Box, Typography } from "@mui/material"

export default function ContentHeader({ title, subtitle }) {
    return (
        <Box component="div" pt="4em" pb="4em" textAlign="center">
            <Typography variant="h2">{title}</Typography>
            <Typography variant="p">{subtitle}</Typography>
        </Box>
    )
}
