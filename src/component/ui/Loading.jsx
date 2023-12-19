import { Dialog, DialogContent, Typography } from '@mui/material'
import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

export const Loading = ({message}) => {
  return (
    <Dialog  onClose={()=>{}} open={true}>
        <DialogContent>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
            <Typography>{message}</Typography>
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