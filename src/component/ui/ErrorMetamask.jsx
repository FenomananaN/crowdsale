import { Box, Dialog, DialogContent, IconButton, Typography } from '@mui/material'
import React from 'react'
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred'
import CloseIcon from '@mui/icons-material/Close'

export const ErrorMetamask = ({open, setOpen}) => {
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
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',py:1}}>
                <ReportGmailerrorredIcon style={{fontSize: '35px'}}/>
              <Typography align='center'>Whoops! Something went wrong.</Typography>
              <Typography align='center'>Please use browser on computer or reload page and try again.</Typography>
              <Typography align='center'>we sincerely apologize for the inconvenience. Thank you!</Typography>
            </Box>
        </DialogContent>
    </Dialog>
  )
}
