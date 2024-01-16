import React, { useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck'
import { Alert, IconButton, Snackbar, Tooltip } from '@mui/material'

export const CopyToClipboard = ({text}) => {
    const [copied,setCopied] = useState(false)
    const [snackbar,setSnackbar] = useState(false)

    const copyToClipbord = (text) =>{
        navigator.clipboard.writeText(text)
        setCopied(true)
        setSnackbar(true)
        setTimeout(function() {
            setCopied(false)
        },5000)
    }
  return (
    <>
    <Snackbar open={snackbar} autoHideDuration={3000} onClose={()=>setSnackbar(false)}>
        <Alert onClose={()=>setSnackbar(false)} severity="success" sx={{ width: 'fit-content' }}>
            Copied
        </Alert>
    </Snackbar> 
    { copied ?
        <Tooltip title="Copied">
            <IconButton>
                <LibraryAddCheckIcon style={{ fill: 'green', fontSize:15}}/>
            </IconButton>
        </Tooltip>
        :
        <Tooltip title="Copy">
            <IconButton onClick={()=>copyToClipbord(text)}>
                <ContentCopyIcon style={{fontSize:15}}/>
            </IconButton>
        </Tooltip>
    }
    </>
  )
}