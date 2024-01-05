import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useStateContext } from '../../context';
import { ConnectWallet } from '@thirdweb-dev/react';
import { ConnectWalletButton } from '../smartContract/ConnectWallet';

export const DialogBox = ({open,setOpen}) => {
  const {address} = useStateContext()

  useEffect(()=>{
    if(address){
      setOpen(false)
    }
  },[address])

  return (
    <>
    { !address &&
      <Dialog
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

        <DialogTitle id="alert-dialog-title">
          NOTE
        </DialogTitle>
        <DialogContent sx={{backgroundColor:'#0088ff00'}}>

          <Typography align='center'>
          Before going any futher you must connect first
          </Typography>
          
          <Box sx={{display:'flex',justifyContent: 'center', mt:2, width: '100%'}}>
            <ConnectWalletButton/>
          </Box>
          
        </DialogContent>
      </Dialog>
      }
      </>
  )
}