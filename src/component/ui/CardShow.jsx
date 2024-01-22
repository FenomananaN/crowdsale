import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { ReactComponent as UsdtIcon} from '../../assets/icon/usdt-crypto-icon-illustration-free-vector.svg'

export const CardShow = ({value,currency,title}) => {
  return (
    <Card sx={{ width: {xs:'100%', md: '22vw'}, backgroundColor: '#2b303b' }}>
      <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{
            width: {xs:'100px',sm:'5vw'},
            height: {xs:'100px',sm:'5vw'},
            border: '3px solid #1BA27A',
            borderRadius: 1555,
            p:0,
            mr:2
        }}>
            <UsdtIcon/>
        </Box>
        <Box>
            
            <Typography sx={{ fontSize: {xs:'6vw',md:'1.6vw'} }}> {value} {currency}</Typography>
            <Typography sx={{ fontSize: {xs:'4vw',md:'0.7vw'} }} color="text.secondary" >{/** gutterBottom */}
                {title}
            </Typography>
        </Box>
      </CardContent>
      {/*<CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>*/}
    </Card>
  )
}
