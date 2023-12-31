import { Box, Dialog, DialogContent, Typography } from '@mui/material'
import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

export const Loading = ({message}) => {
  return (
    <Dialog  onClose={()=>{}} open={true}
    PaperProps={{
      style: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
    }}>
        <DialogContent>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
              <RotatingLines
                  strokeColor="#F37A24"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="96"
                  visible={true}
              />
              <Typography>{message}</Typography>
            </Box>
        </DialogContent>
    </Dialog>
  )
}
/*

<RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
        />
*/