import { Box, Typography } from '@mui/material'
import React from 'react'

export const ProgressBar = ({amount,totalAmount}) => {

    const withAmout= amount * 100 / totalAmount  
  return (
    <Box>
        <Box sx={{
            width:'300px',
            height: '40px',
            backgroundColor: 'grey',
            borderRadius: 50,
            overflow: 'hidden',
            position: 'relative',
        }}>

            <Box sx={{
                width: `${withAmout}%`,
                height: '100%',
                backgroundColor: '#0088ff',
                position: 'absolute',
                zIndex: 1,
            }}>
            </Box>
            
            <Box sx={{
                width: '100%',
                height: '100%',    
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                zIndex: 2
            }}>
                <Typography >Token Sold: {amount}/{totalAmount}</Typography>
            </Box>

        </Box>
    </Box>
  )
}
