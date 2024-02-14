import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

import tata from '../assets/image/about.webp'

export const About = ({id}) => {
  return (
    <Container id={id} sx={{mt:3}}>
        <Paper sx={{ p:3}}>
            <Typography variant='h5' align='center' sx={{color: '#C2992D', fontWeight: 'bold'}}>ABOUT</Typography>
            <Grid container>
                <Grid item xs={12} md={4} sx={{display: 'flex', justifyContent:'center', px:{xs:2,sm:5}}}>
                    <Box
                        component={'img'}
                        src={tata}
                        alt='tata'
                        width={{xs:'100%', md: 350}}
                        //border={'2px solid white'}
                        sx={{
                            boxShadow:'10px 10px 10px 0px #111',
                            borderRadius: 5,
                            backgroundColor:'#111',
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={8} sx={{display:'flex', alignItems:'center', mt:{xs:3,md:0}}}>
                    <Typography textAlign={'center'}>
                    Bitcoin Smiles! is the memecoin that turns market downturns into joyful moments. Inspired by the playful spirit of the crypto community, our virtual currency celebrates the unexpected with a smile. Join us to navigate through the highs and lows of the market with humor and positivity.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent={'center'}>
                <Grid item xs={12} md={6} mt={3}>
                    <Typography variant='h6' align='center' sx={{fontWeight: 'bold'}}>Objective</Typography>
                    <Typography align='center'>
                    Our goal is to create a positive community within the cryptocurrency ecosystem. Bitcoin Smiles! encourages its holders to remain optimistic even in challenging market times.
                    </Typography>
                </Grid>

            </Grid>
        </Paper>
    </Container>
  )
}
