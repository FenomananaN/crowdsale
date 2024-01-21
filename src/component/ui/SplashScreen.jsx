import { Box } from '@mui/material'
import React from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { ClimbingBoxLoader } from 'react-spinners'

export const SplashScreen = () => {
  return (
    <Box sx={{
        //backgroundColor: '#282c34',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh'
    }}
    >
       <ClimbingBoxLoader size={20} color='#C2992D' loading={true}/>
    </Box>
  )
}
//#F37A24