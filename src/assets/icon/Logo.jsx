import React from 'react'
 import logo from '../image/logo-official.webp'
import { Box } from '@mui/material'

export const Logo = ({width, height , sx}) => {
  return (
    <Box component={'img'} src={logo} alt='logo'  width={width ? width : 25} height={height ? height : 25} sx={sx}/>
  )
}
