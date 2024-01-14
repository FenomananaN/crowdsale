import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Disclaimer } from './Disclaimer'
import { Telegram } from './socialMedia/Telegram'
import { Twitter } from './socialMedia/Twitter'

export const Footer = () => {
    const [disclaimer, setDisclaimer] = useState(false)
  return (
    <Box mb={6}>
        <Disclaimer open={disclaimer} setOpen={setDisclaimer}/>
        <Container>
            <Grid container>
                <Grid item xs={12} md={3}>
                    <Box sx={{display:'flex'}}>
                        <Button onClick={()=>setDisclaimer(true)}>Disclaimer</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Typography> &copy; BITJOY | All Rights Reserved | contact@bitjoycoin.com</Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Stack direction={'row'} justifyContent={'end'}>
                        <Telegram width={30} height={30}/>
                        <Twitter width={30} height={30}/>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
        
    </Box>
  )
}
