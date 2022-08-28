import { Box, Container, Typography } from '@mui/material'

export default function Section(props) {
    return (
        <Box component="section" sx={{width: '100%'}}>
        <Container>
            <Box component="div">
                <Typography component="h1"></Typography>
            </Box>
        </Container>
        </Box>
    )
}
