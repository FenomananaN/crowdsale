import { Container, Typography , Box} from '@mui/material'
import React from 'react'
import { useStateContext, useUserContext } from '../context'
import { BuyToken, ClaimToken, Countdown, ProgressBar } from '../component'

/*import { Countdown } from './ui/Countdown'
import { BuyToken } from './smartContract/BuyToken'
import { useStateContext, useUserContext } from '../context'
import { ClaimToken } from './smartContract/ClaimToken'
import { ProgressBar } from './ui/ProgressBar'*/

export const Crowdsale = ({id}) => {

  const {preIco} = useStateContext()
  const {balance,claim} = useUserContext()

  return (
    <Container id={id} sx={{mt:9}}>
        <Typography variant='h4' align='center' sx={{color: '#0B5E8F', fontWeight: 'bold'}}>PRESALE</Typography>

        <Typography variant='h5' align='center' pt={3}>Join the <span style={{color: '#0B5E8F', fontWeight:'bold'}}>$TATA</span> movement</Typography>
        {preIco ? (
        <>
        <Box sx={{
          mt: 3,
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Box>
            <Typography ml={2}>Buy now before it ends</Typography>
            <Countdown countdownTarget={"2024-01-2 21:25:00"}/>
          </Box>
        </Box>
        <Box sx={{
          mt: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <ProgressBar amount={1745345} targetedAmount={5000000} amountToken={37645256} totalAmountToken={210000000}/>
          <Typography sx={{
            color: '#FFD700',
            mt:1,
          }}>&lt;&lt; You have purchased {balance} TATA &gt;&gt;</Typography>
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
    
    </Container>
  )
}
/*


export const Crowdsale = () => {

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


*/