import { Box, Typography } from "@mui/material"

export default function ContentHeader({ title, subtitle }) {
    return (
        <Box component="div" mb="2em" mt="2em" textAlign="center">
            <Typography variant="h2">{title}</Typography>
            <Typography variant="p">{subtitle}</Typography>
        </Box>
    )
}
