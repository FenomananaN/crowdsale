import { Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

export const VerticalDivider = ({title,children}) => {
  return (
    <Box sx={{display:'flex'}}>
        <Stack  spacing={1} mt={1}>
            <Box display={'flex'}>
                <Box width={16} height={16} sx={{bgcolor:'#C2992D', borderRadius:50}}/>
            </Box>
            <Box height={'100%'} alignSelf={'center'}>
                <Divider orientation="vertical"></Divider>
            </Box>
        </Stack>

        <Box>
            <Typography ml={1} variant='h6' sx={{color:'#C2992D', fontWeight: 'bold'}}>{title}</Typography>
            <Box ml={{xs:2,sm:3,md:6, lg:9}}>
                {children}
            </Box>
        </Box>
    </Box>
  )
}