import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useStateContext } from '../../context';
import { ConnectWallet } from '@thirdweb-dev/react';

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
          Before going any futher you must connect first
          <ConnectWallet
              theme={"dark"}
              modalTitle={"Choisir Wallet"}
              modalSize={"compact"}
              welcomeScreen={{ title: "aas" }}
              modalTitleIconUrl={""}
          />
        </DialogContent>
      </Dialog>
      }
      </>
  )
}