import { Container, Typography , Button, Box, Paper, BottomNavigation, BottomNavigationAction, Tabs, Tab} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useStateContext, useUserContext } from '../context'
import { BuyToken, ClaimToken, Countdown, ProgressBar } from '../component'
import dayjs from 'dayjs'

export const Crowdsale = ({id}) => {

  const {preIco, fundsRaised, investorTargetCap, timeCrowdsale, token , tokenSold, crowdsaleTokenBalance, rate,firstRate,secondRate,thirdRate,} = useStateContext()
  const {balance,claim} = useUserContext()

  const convertToReadableTime = () => {
    //console.log(dayjs.unix(timeCrowdsale).format('YYYY-MM-DD HH:mm:ss'))
    return dayjs.unix(timeCrowdsale).format('YYYY-MM-DD HH:mm:ss')
  }
   console.log("preIco",preIco);
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
        <Box sx={{display:'flex', justifyContent:'center'}}>
        <BottomNavigation showLabels color={'main'} sx={{ width: {xs:'100%',md:'20vw'} , border:'1px solid #111', borderRadius:2, my:2}} value={round} onChange={handleRound}>
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
        </Box>

        <Box sx={{display:'flex', justifyContent:'center', my:3}}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={round} onChange={handleRound}>
              <Tab label="Round One" value={1}/>
              <Tab label="Round Two" value={2}/>
              <Tab label="Round Three"  value={3}/>
            </Tabs>
          </Box>
        </Box>
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
          
          case 1:
              return <StageCrowdsale round={round} setRound={setRound} preIco = {preIco} balance={balance} fundsRaised={fundsRaised} crowdsaleTokenBalance={crowdsaleTokenBalance} rate={firstRate} firstRate={firstRate} secondRate={secondRate} thirdRate={thirdRate} tokenSold={tokenSold}   convertToReadableTime={convertToReadableTime}/>
          case 2:
            return <StageCrowdsale round={round} setRound={setRound} preIco = {preIco} balance={balance} fundsRaised={fundsRaised} crowdsaleTokenBalance={crowdsaleTokenBalance} rate={secondRate}firstRate={firstRate} secondRate={secondRate} thirdRate={thirdRate}  tokenSold={tokenSold}   convertToReadableTime={convertToReadableTime}/>
          case 3:
            return <StageCrowdsale round={round} setRound={setRound} preIco = {preIco} balance={balance} fundsRaised={fundsRaised} crowdsaleTokenBalance={crowdsaleTokenBalance} rate={thirdRate} firstRate={firstRate} secondRate={secondRate} thirdRate={thirdRate} tokenSold={tokenSold}   convertToReadableTime={convertToReadableTime}/>
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

const StageCrowdsale = ({round ,setRound, preIco, balance,fundsRaised,crowdsaleTokenBalance,rate,firstRate,secondRate,thirdRate, tokenSold, convertToReadableTime}) =>{
  console.log("ROUNDDDD",round, preIco )
  return(
    <>
    {(() => {
        switch (round) {
          case 1 :
            return ( <>
            { preIco === round ?
              <>
              <CurrentRound balance={balance} fundsRaised={fundsRaised} crowdsaleTokenBalance={crowdsaleTokenBalance} rate={rate}  tokenSold={tokenSold}   convertToReadableTime={convertToReadableTime}/>
              </>
              : preIco > round ?
                  <FinishedRond round={round} setRound={setRound} price={1/firstRate} currentRound={preIco}/>: <CommingRound round={round} setRound={setRound} price={1/firstRate} currentRound={preIco}/>
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
                  <FinishedRond round={round} setRound={setRound} price={1/secondRate} currentRound={preIco}/>: <CommingRound round={round} setRound={setRound} price={1/secondRate} currentRound={preIco}/>
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
                  <FinishedRond round={round} setRound={setRound} price={1/thirdRate} currentRound={preIco}/>: <CommingRound round={round} setRound={setRound} price={1/thirdRate} currentRound={preIco}/>
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

const CommingRound = ({price, round , setRound, currentRound}) => {
  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <Typography align={'center'} color='main' sx={{fontWeight: 'bold',my:1}}>ROUND {round}</Typography>
      <Typography align='center' sx={{my:1}}>Buy before the price will increase into <span>$ {price}</span> </Typography>
      <Button variant='contained' color={'main'} onClick={()=>{setRound(currentRound)}}>Go to Round {currentRound}</Button>
    </Box>
  )
}

const FinishedRond = ({round,setRound, price , currentRound}) =>{
  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', py:1}}>
      <Typography sx={{my:1}}>Round {round} was finished</Typography>
      <Typography sx={{my:1}}>The price was:  <span>${price}</span></Typography>
      <Button variant='contained' sx={{my:1}} color='main' onClick={()=>{setRound(currentRound)}}> Go to round {currentRound}</Button>
    </Box>
  )
}
