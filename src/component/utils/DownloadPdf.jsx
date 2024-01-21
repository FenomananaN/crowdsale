import React from 'react'
import pdfUrl from '../../assets/document/whitepaper-bitcoin-smiles.pdf'
import { Button } from '@mui/material'

export const DownloadPdf = () => {
    const onButtonClick = () => {
       // const pdfUrl = "Sample.pdf";
        const link = document.createElement("a")
        link.href = pdfUrl
        link.download = "whitePaper.pdf" // specify the filename
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }
  return (
        <Button color='main' onClick={onButtonClick}>White Paper</Button>
  )
}
