import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Disclaimer } from './Disclaimer'
import { Telegram } from './socialMedia/Telegram'
import { Twitter } from './socialMedia/Twitter'
import { DownloadPdf } from './utils/DownloadPdf'
import { Roadmap } from './Roadmap'

export const Footer = () => {
    const [disclaimer, setDisclaimer] = useState(false)
    const [roadmap, setRoadmap] = useState(false)
  return (
    <Box mb={6}>

        <Disclaimer open={disclaimer} setOpen={setDisclaimer}/>
        <Roadmap open={roadmap} setOpen={setRoadmap}/>

        <Container>
            <Grid container>
                <Grid item xs={12} md={3}>
                    <Box sx={{display:'flex',justifyContent:{xs:'center',md:'start'}}}>
                        <Button color='main' onClick={()=>setRoadmap(true)}> Roadmap</Button>
                        <DownloadPdf/>
                        <Button color='main' onClick={()=>setDisclaimer(true)}>Disclaimer</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7} justifyContent={{xs:'center',md:'start'}}>
                    <Typography align='center'> &copy; BITJOY | All Rights Reserved | support@bitjoycoin.com</Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Stack direction={'row'} justifyContent={{xs:'center',md:'end'}}>
                        <Telegram width={30} height={30}/>
                        <Twitter width={30} height={30}/>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
        
    </Box>
  )
}
