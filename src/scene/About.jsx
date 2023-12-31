import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

import tata from '../assets/image/tata.webp'

export const About = ({id}) => {
  return (
    <Container id={id}>
        <Paper sx={{ p:3, backgroundColor: '#282C34'}}>
            <Typography variant='h5' align='center' sx={{color: '#0B5E8F', fontWeight: 'bold'}}>ABOUT</Typography>
            <Grid container>
                <Grid item xs={12} md={4} sx={{display: 'flex', justifyContent:'center'}}>
                    <Box
                        component={'img'}
                        src={tata}
                        alt='tata'
                        width={{xs:'60%', md: 150}}
                    />
                </Grid>
                <Grid item xs={12} md={8} sx={{display:'flex', alignItems:'center', mt:{xs:3,md:0}}}>
                    <Typography>
                        Inspired by the bold spirit and memorable nature of the expression "TATA," our memecoin is more than just a digital currency. It's a joyful experience, a delightful blend of comedy and creativity in the world of cryptocurrency.
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    </Container>
  )
}
