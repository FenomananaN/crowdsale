import { Box, Dialog, DialogContent, IconButton, Typography } from '@mui/material'
import React from 'react'
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred'
import CloseIcon from '@mui/icons-material/Close'

export const ShowError = ({message, open, setOpen}) => {
  return (
    <Dialog onClose={()=>setOpen(false)} open={open}
    PaperProps={{
      style: {
        backgroundColor: 'red',
        boxShadow: 'none',
        position: 'relative'
      },
    }}>
        <DialogContent>
            <IconButton sx={{position:'absolute', right: 0, top:0}} onClick={()=>setOpen(false)}>
                <CloseIcon/>
            </IconButton>
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center',px:{xs:1, sm:3},py:3}}>
                <ReportGmailerrorredIcon style={{fontSize: '35px'}}/>
              <Typography sx={{ml:2}}>{message}</Typography>
            </Box>
        </DialogContent>
    </Dialog>
  )
}
