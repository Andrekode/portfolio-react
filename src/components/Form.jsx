import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

function Form() {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit')
    }

    return (
        <div className="form-container">
            <form onSubmit={(e) => handleSubmit(e)}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid
                        container
                        alignItems="center"
                        justify="center"
                        direction="column"
                        spacing={2}
                    >
                        <Grid item>
                            <TextField
                                id="name"
                                type="text"
                                lable="name"
                                placeholder="Name"
                                variant="outlined"
                                required
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="subject"
                                type="text"
                                lable="subject"
                                placeholder="Subject"
                                variant="outlined"
                                required
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="email"
                                type="email"
                                lable="email"
                                placeholder="E-Mail"
                                variant="outlined"
                                required
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="message"
                                lable="message"
                                placeholder="Message"
                                variant="outlined"
                                multiline
                                required
                                xs={12}
                            />
                        </Grid>
                        <Button
                            className="button button-primary"
                            type="submit"
                            variant="contained"
                        >
                            Submit
                        </Button>
                    </Grid>
                </Box>
            </form>
        </div>
    )
}

export default Form
