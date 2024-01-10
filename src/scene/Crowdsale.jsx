import { Container, Typography , Box} from '@mui/material'
import React from 'react'
import { useStateContext, useUserContext } from '../context'
import { BuyToken, ClaimToken, Countdown, ProgressBar } from '../component'
import dayjs from 'dayjs'

export const Crowdsale = ({id}) => {

  const {preIco, fundsRaised, investorTargetCap, timeCrowdsale, token , tokenSold, crowdsaleTokenBalance} = useStateContext()
  const {balance,claim} = useUserContext()

  const convertToReadableTime = () => {
    console.log(dayjs.unix(timeCrowdsale).format('YYYY-MM-DD HH:mm:ss'))
    return dayjs.unix(timeCrowdsale).format('YYYY-MM-DD HH:mm:ss')
  }

  return (
    <Container id={id} sx={{mt:9}}>
        <Typography variant='h4' align='center' sx={{color: '#0B5E8F', fontWeight: 'bold'}}>PRESALE</Typography>

        <Typography variant='h5' align='center' pt={3}>Join the <span style={{color: '#0B5E8F', fontWeight:'bold'}}>$BITJOY</span> movement</Typography>
        {preIco === 1 ? (
          <>
            <Box sx={{
              mt: 3,
              display: 'flex',
              justifyContent: 'center'
            }}>
              <Box>
                <Typography ml={2}>Buy now before it ends</Typography>
                <Countdown countdownTarget={convertToReadableTime()}/>
              </Box>
            </Box>

            <Box sx={{
              mt: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <ProgressBar amount={Number(fundsRaised)} targetedAmount={Number(investorTargetCap)} amountToken={Number(tokenSold)} totalAmountToken={Number(crowdsaleTokenBalance)}/>{/* token.totalSupply */}
              <Typography sx={{
                color: '#FFD700',
                mt:1,
              }}>&lt;&lt; You have purchased {balance} BIJOY &gt;&gt;</Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              justifyContent:'center',
              width: '100%',
              py:3,
            }}>
              <BuyToken/>
            </Box>
          </>
      )
      : preIco === 0 ?
        (
          <Box sx={{
            mt: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}> 
          <Typography sx={{
            color: '#FFD700',
            mt:1,
          }}>&lt;&lt; You have purchased {balance} BIJOY &gt;&gt;</Typography>
          {claim ? 
          <ClaimToken/>
          :
          <BuyToken/>}
          </Box>
        ) 
        : 
        <>
            <Box sx={{
              mt: 3,
              display: 'flex',
              justifyContent: 'center'
            }}>
              <Box sx={{
                mt: 3,
                display: 'flex',
                flexDirection:'column',
                alignItems: 'center'
              }}>
                <Typography ml={2}>The presale is set to commence after the countdown timer reaches zero</Typography>
                <Countdown countdownTarget={convertToReadableTime()}/>
              </Box>
            </Box>

            <Box sx={{
              mt: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
             {/* <Typography sx={{
                color: '#FFD700',
                mt:1,
              }}>&lt;&lt; You have purchased {balance} BIJOY &gt;&gt;</Typography>
                */}
            </Box>
           {/*  <Box sx={{
              display: 'flex',
              justifyContent:'center',
              width: '100%',
              py:3,
            }}>
              <BuyToken/>
            </Box>
            */}
          </>

    }
    
    </Container>
  )
}
