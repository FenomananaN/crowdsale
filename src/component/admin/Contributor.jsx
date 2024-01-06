import { Box, Typography } from '@mui/material'
import React from 'react'

export const Contributor = ({data}) => {
  return (
    <Box>
        <Typography>List des contributor</Typography>
        {data.map((data,index)=>{
            return <Typography key={index}>{data}</Typography>
        })}
    </Box>
  )
}
