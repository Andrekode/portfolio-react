import React from "react"
import Form from "../components/Form"
import ContentHeader from "../components/ContentHeader"
import { pageContent } from "../const/pageContent"
import {Box} from '@mui/material'

function Contact() {
    const { title, subtitle } = pageContent[2]

    return (
        <Box component='section' minHeight="100vh" sx={{bgcolor: 'primary.light'}} >
            <ContentHeader title={title} subtitle={subtitle} />
            <Form />
        </Box>
    )
}

export default Contact
