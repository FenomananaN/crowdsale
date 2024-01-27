import { Container, Typography , Box, Paper, BottomNavigation, BottomNavigationAction} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useStateContext, useUserContext } from '../context'
import { BuyToken, ClaimToken, Countdown, ProgressBar } from '../component'
import dayjs from 'dayjs'
import { Button } from 'react-scroll'

export const Crowdsale = ({id}) => {

  const {preIco, fundsRaised, investorTargetCap, timeCrowdsale, token , tokenSold, crowdsaleTokenBalance, rate} = useStateContext()
  const {balance,claim} = useUserContext()

  const convertToReadableTime = () => {
    //console.log(dayjs.unix(timeCrowdsale).format('YYYY-MM-DD HH:mm:ss'))
    return dayjs.unix(timeCrowdsale).format('YYYY-MM-DD HH:mm:ss')
  }

  const [round,setRound] = useState(preIco)

  const handleRound = (event,value) => {
    setRound(value)
  }


  return (
    <Container id={id} sx={{mt:9}}>
      <Paper sx={{p:{xs:1,sm:2,md:3,lg:6}}}>
        <Typography variant='h4' align='center' sx={{color: '#C2992D', fontWeight: 'bold'}}>TOKEN SALE</Typography>
        <Typography variant='h5' align='center' pt={3}>Join the <span style={{color: '#C2992D', fontWeight:'bold'}}>$BITJOY</span> movement</Typography>

        {/* NAvigation Phase */}
        <BottomNavigation showLabels sx={{ width: 'fit-content',backgroundColor: 'transparent' }} value={round} onChange={handleRound}>
          <BottomNavigationAction sx={{ borderTopLeftRadius: 12, borderBottomLeftRadius:12}}
            label="Round 1"
            value={1}
          />
          <BottomNavigationAction
            label="Round 2"
            value={2}
          />
          <BottomNavigationAction sx={{ borderTopRightRadius: 12, borderBottomRightRadius:12}}
            label="Round 3"
            value={3}
          />
        </BottomNavigation>
        {/* END NAvigation Phase */}

        {(() => {
        switch (preIco) {
          case 0 :
            return (
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
          case 1 || 2 || 3:
          return <StageCrowdsale round={round} preIco = {preIco} balance={balance} fundsRaised={fundsRaised} crowdsaleTokenBalance={crowdsaleTokenBalance} rate={rate}  tokenSold={tokenSold}   convertToReadableTime={convertToReadableTime}/>
          case 4:
            return (
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
                </Box>
              </>
            )
          default:
            return null
        }
      })()}

      </Paper>
    </Container>
  )
}

const StageCrowdsale = ({round , preIco, balance,fundsRaised,crowdsaleTokenBalance,rate, tokenSold, convertToReadableTime}) =>{
  return(
    <>
    {(() => {
        switch (round) {
          case 1 :
            return (
            <>
            { preIco === round ?
              <>
              <CurrentRound balance={balance} fundsRaised={fundsRaised} crowdsaleTokenBalance={crowdsaleTokenBalance} rate={rate}  tokenSold={tokenSold}   convertToReadableTime={convertToReadableTime}/>
              </>
              : preIco > round ?
                  <FinishedRond/>: <CommingRound/>
            }
            </>)
          case 2 :
            return (
            <>
            { preIco === round ?
              <>
              <CurrentRound balance={balance} fundsRaised={fundsRaised} crowdsaleTokenBalance={crowdsaleTokenBalance} rate={rate}  tokenSold={tokenSold}   convertToReadableTime={convertToReadableTime}/>
              </>
              : preIco > round ?
                  <FinishedRond/>: <CommingRound/>
            }
            </>)
          case 3 :
            return (
            <>
            { preIco === round ?
              <>
              <CurrentRound balance={balance} fundsRaised={fundsRaised} crowdsaleTokenBalance={crowdsaleTokenBalance} rate={rate}  tokenSold={tokenSold}   convertToReadableTime={convertToReadableTime}/>
              </>
              : preIco > round ?
                  <FinishedRond/>: <CommingRound/>
            }
            </>)
          default:
            return null
        }
      })()
    }
     
  </>
  )
}

const CurrentRound = ({ balance,fundsRaised,crowdsaleTokenBalance,rate, tokenSold, convertToReadableTime}) => {
  return (
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
      <ProgressBar amount={Number(fundsRaised)} targetedAmount={Number(crowdsaleTokenBalance)*(1/rate)} amountToken={Number(tokenSold)} totalAmountToken={Number(crowdsaleTokenBalance)}/>{/* token.totalSupply */}
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

}

const CommingRound = ({price, round}) => {
  return (
    <Box>
      <Typography color='main' sx={{fontWeight: 'bold'}}>ROUND {round}</Typography>
      Buy before the price will increase into <span>$ {price}</span> 
    </Box>
  )
}

const FinishedRond = ({round, price , currentRound}) =>{
  return (
    <Box>
      <Typography>Round {round} was finished</Typography>
      <Typography>The price was:  <span>{price}</span></Typography>
      <Button variant='contained' color='main'> Go to round {currentRound}</Button>
    </Box>
  )
}
