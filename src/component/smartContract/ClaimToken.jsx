import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useUserContext } from '../../context'
import { numberFormatter } from '../../utils'
import dayjs from 'dayjs'
import { CountdownSimple } from '../ui/CountdownSimple'


export const ClaimToken = () => {
  
  const {claimTokens, claimBalance,vestingRound,vestingTime, initialTokenVesting} = useUserContext()

  const [claim,setClaim] = useState(false)

  useEffect(()=>{
    if (vestingRound === 0){
      setClaim(true)
    }
    else {
      //ito tena izy
      setClaim(dayjs.unix(vestingTime).isBefore(dayjs()))

      //test
      //setClaim(dayjs.unix(vestingTime).isAfter(dayjs()))
    }
  },[vestingRound])

  const convertToReadableTime = () => {
    //console.log(dayjs.unix(timeCrowdsale).format('YYYY-MM-DD HH:mm:ss'))
    //console.log('time',dayjs.unix(timeCrowdsale).format('YYYY-MM-DD HH:mm:ss'))
    if(vestingRound >0 && vestingRound<4){
      return dayjs.unix(vestingTime).format('YYYY-MM-DD HH:mm:ss')
      //return dayjs('2024-02-11 16:53:00')
    }
    else {
      return "0"
    }
  }
  const availableToBeClaimed = () =>{
    if(vestingRound===0){
      return claimBalance*25/100
    }
    if(initialTokenVesting){
      return initialTokenVesting*25/100
    }
    if(vestingRound===3){
      return claimTokens
    }
  }

  return (
    <Box>

      <Typography> You have {numberFormatter.format(claimBalance)} BITJOY to be claimed</Typography>
      
       
        <Box sx={{ display: 'flex', justifyContent: 'center',my:2}}>
          <CountdownSimple countdownTarget={convertToReadableTime()} setClaim={setClaim}/>
        </Box>
      { claim && vestingRound<3 &&
      (
        <>
          <Typography align='center'>
            Claim <span>25% of Your BITJOY</span>
          </Typography>
          <Typography align='center'>Claim {numberFormatter.format(availableToBeClaimed())} BITJOY Now</Typography>
        </>
      )}
      <Box sx={{display:'flex', justifyContent:'center'}}>
        <Button color='main'
          variant='contained' 
          round='rounded'
          disabled={!claim}
          sx={{
              textTransform: 'capitalize', //lowercase, capitalize, none
              mt:1,
              mb:2
            }}
          onClick={async () => {
            setClaim(false)
            await claimTokens()
          }}
        >
            Claim
        </Button>
      </Box>
    </Box>
  )
}
