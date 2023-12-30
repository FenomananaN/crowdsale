import { Box } from '@mui/material'
import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

export const SplashScreen = () => {
  return (
    <Box sx={{
        backgroundColor: '#282c34',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh'
    }}
    >
        <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
    </Box>
  )
}
