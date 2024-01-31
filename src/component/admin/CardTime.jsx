import { Box, Button, Card, CardContent, Divider, Grid, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { AccessTimeOutlined, Edit } from '@mui/icons-material'
import dayjs from 'dayjs'

export const CardTime = ({time, round ,setOpen}) => {
  console.log(time)
  let _time = dayjs.unix(time)
  //_time =_time.format('YYYY-MM-DD HH:mm:ss')
  const _timeD =_time.format('MMM DD, YYYY')
  const timeday= _time.format('LT')
  
  return (
    <Card sx={{ width: {xs:'100%', md: 'fit-content'}, my:2 }}>
      <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Grid container>
            <Grid item xs={0.2}>
              <Divider orientation='vertical' sx={{borderLeftWidth:5,borderRightWidth:0, borderColor: '#0088ff'}}/>
            </Grid>
            <Grid item xs={11.8} pl={1}>
              <Typography sx={{ fontSize: {xs:'3vw',md:'1vw'} }} color="text.secondary" gutterBottom>{/**  */}
                    Round {round} finish in: 
              </Typography>
              <Stack direction={'row'} alignItems={'center'} spacing={1}>
                <AccessTimeOutlined style={{fontSize:{xs:'8vw',md:'2.5vw'}}}/>
                <Stack>
                  <Typography sx={{ fontSize: {xs:'5vw',md:'1.5vw'}, pr:3 }}> {_timeD}</Typography>
                  <Typography sx={{ fontSize: {xs:'3.8vw',md:'1.2vw'}, pr:3 }}>{timeday}</Typography>
                </Stack>
                <IconButton sx={{border: '1px solid white', borderRadius:2, p:0.4}} onClick={()=>setOpen(true)}>
                  <Edit style={{fontSize: {xs:'7vw',md:'1.2vw'}}}/>
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
