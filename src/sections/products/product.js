import { Box, Container, Grid } from '@mui/material'
import React from 'react'

export default function Product(props) {
  return (
    <Box
    component="main"
    sx={{
        flexGrow: 1,
        py: 8
    }}
    >
        <Container maxWidth="xl">
            <Grid
            container
            spacing={3}
            >
            <Grid
                xs={12}
                sm={6}
                lg={3}
            >
                <h1>{props.slug}</h1>
            </Grid>
            </Grid>
        </Container>
    </Box>
  )
}
