import { Box, Button, Card, CardContent, Divider, Grid, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { AccessTimeOutlined, Edit } from '@mui/icons-material'

export const CardTime = () => {
  return (
    <Card sx={{ width: {xs:'100%', md: '100%'} }}>
      <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Grid container>
            <Grid item xs={0.2}>
              <Divider orientation='vertical' sx={{borderLeftWidth:5,borderRightWidth:0, borderColor: '#0088ff'}}/>
            </Grid>
            <Grid item xs={11.8} pl={1}>
              <Typography sx={{ fontSize: {xs:'3vw',md:'1vw'} }} color="text.secondary" gutterBottom>{/**  */}
                    Presale ends in :
              </Typography>
              <Stack direction={'row'} alignItems={'center'} spacing={1}>
                <AccessTimeOutlined style={{fontSize:{xs:'8vw',md:'2.5vw'}}}/>
                <Typography sx={{ fontSize: {xs:'6vw',md:'1.5vw'}, pr:6 }}> Dec 15, 2024</Typography>
                <IconButton sx={{border: '1px solid white', borderRadius:2, p:0.4}}>
                  <Edit style={{fontSize: {xs:'8vw',md:'1.2vw'}}}/>
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
      </CardContent>
      {/*<CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>*/}
    </Card>
  )
}
