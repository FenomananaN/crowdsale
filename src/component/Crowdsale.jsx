import { Box,Typography } from '@mui/material'
import React from 'react'

import { Countdown } from './ui/Countdown'
import { BuyToken } from './smartContract/BuyToken'
import { useStateContext, useUserContext } from '../context'
import { ClaimToken } from './smartContract/ClaimToken'
import { ProgressBar } from './ui/ProgressBar'

export const Crowdsale = () => {
    const {preIco} = useStateContext()
    const {balance,claim} = useUserContext()

  return (
    <Box p={3}>
      {preIco ? (
        <>
        <Typography>Buy now before it ends</Typography>
        <Countdown/>
        <ProgressBar amount={250000} totalAmount={1000000}/>
        <Typography>You have purchased {balance} GRF</Typography>
        <BuyToken/>
        </>
      )
      :
      (
        <>
        <Typography>You have purchased {balance} GRF</Typography>
        {claim ? 
        <ClaimToken/>
        :
        <BuyToken/>}
        </>
      )}
    </Box>
  )
}
