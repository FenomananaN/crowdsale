import { Box, Typography } from '@mui/material'
import React from 'react'

export const ChartLabel = ({color,text}) => {
  return (
    <Box display={'flex'} alignItems={'center'}>
        <Box sx={{
            width:18,
            height:18,
            borderRadius:50,
            backgroundColor: color

        }}/>
        <Typography sx={{color:color, pl:1}}>{text}</Typography>
    </Box>
  )
}
