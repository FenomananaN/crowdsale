import { Box, Button, Typography, Stack, TextField, FormControl, InputLabel, Input, InputAdornment, InputBase, Paper, Divider } from '@mui/material'
import {ReactComponent as  UsdtIcon} from '../../assets/icon/tether-seeklogo.com.svg'
//import {ReactComponent as  EtheriumIcon} from '../../assets/icon/ethereum-eth.svg'
//import {ReactComponent as  CoreIcon} from '../../assets/icon/core-logo.svg'
import {ReactComponent as  BnbIcon} from '../../assets/icon/bnb-bnb-logo.svg'
import tata from '../../assets/image/tata-logo.png'

import React, { useState } from 'react'
import { AccountCircle } from '@mui/icons-material'

import { useStateContext, useUserContext } from '../../context'
import { DialogBox } from '../utils/DialogBox'

export const BuyToken = () => {
  
  const {preIco,rate, coreRate, address } = useStateContext()

  const {buyTokens,buyTokenOnPresale,buyTokenWithUsdtOnPresale, ethBalance, usdtBalance,buyTokensWithUsdt} = useUserContext()

  const [currencToPay, setCurrencyToPay] = useState('usdt')
  const [crypto, setCrypto] = useState('')
  const [grfToken,setGrfToken] = useState('')

  //for connecting wallet dialog
  const [open,setOpen] = useState(false)

  const handleBuyTokenWithEth = async () => {
    if(preIco){
      console.log('buyTokenOnPresale')
      await buyTokenOnPresale(crypto)
    } else {
      console.log('buyTokens')
      await buyTokens(crypto)
    }
    //console.log(crypto,grfToken)
  }

  const handleBuyTokenWithUsdt = async () => {
    if(preIco){
      console.log('buyTokenWithUsdtOnPresale')
      await buyTokenWithUsdtOnPresale(crypto)
    } else {
      console.log('buyTokens')
      await buyTokensWithUsdt(crypto)
    }
    //console.log(crypto,grfToken)
  }

  const handleBuyToken = () =>{
    if(crypto === ''){
      alert("can't be null")
      return false
    }
    
    if(!address){
      setOpen(true)
    } else {
      if(currencToPay === 'usdt'){
        handleBuyTokenWithUsdt()
      }
      else {
        handleBuyTokenWithEth()
      }
    }
  }


  const handleCryptoOnChange = (value) =>{
    setCrypto(value)
    if(currencToPay === 'usdt'){
      setGrfToken(value*rate)
    }
    else{
      setGrfToken(value*rate*coreRate) //diso crowdsale rate*coreRate)
    }
  }

  return (
    <>
    <DialogBox open={open} setOpen={setOpen}/>
    <Paper sx={{
      width: 'fit-content',
      backgroundColor: '#282C34',
      borderRadius: 5,
      py:2,
      px:{xs:2,md:6}
    }}>
      <Typography align='center'> 1 TATA = ${Math.floor((1/rate)*1000)/1000}</Typography>
       <Stack direction={'row'} spacing={2} py={1}
        sx={{
          //width: 'fit-content'
          justifyContent:'center'
        }}>
        <Button variant="outlined" round='rounded' 
          startIcon= {<BnbIcon width={25} height={25}/>}
          onClick={()=>setCurrencyToPay('bnb')}
          sx={{
            textTransform: 'capitalize' //lowercase, capitalize, none
          }}>
            BNB
        </Button>
          <Button variant="outlined" round='rounded' 
            startIcon= {<UsdtIcon width={25} height={25}/>}
            onClick={()=>setCurrencyToPay('usdt')}
            sx={{
              textTransform: 'capitalize' //lowercase, capitalize, none
            }}>
              USDT
          </Button>

        </Stack>

        <Typography align='center' sx={{
          color: currencToPay === 'usdt'? '#53ae94':'#F0B90B'
        }}>
          Your {currencToPay.toUpperCase()} balance = {currencToPay === 'usdt' ? usdtBalance: ethBalance} {currencToPay.toUpperCase()}
        </Typography>
        <Divider variant='middle' sx={{
          bgcolor: currencToPay === 'usdt'? '#53ae94':'#F0B90B',
          height:2}} />

        <Stack my={1} direction={'row'} spacing={1}>
          <Box >
            <Typography>
              You pay
            </Typography>

            <TextField
              variant="outlined"
              name="usdt"
              size='small'
              value={crypto}
              onChange={(e)=>handleCryptoOnChange(e.currentTarget.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    {currencToPay === 'usdt' ? <UsdtIcon width={20} height={20} /> :<BnbIcon width={20} height={20} />}
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box >
            <Typography>You receive</Typography>
            <TextField
              variant="outlined"
              name="usdt"
              size='small'
              value={grfToken}
              onChange={(e)=>setGrfToken(e.currentTarget.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Box component={'img'} src={tata} alt='tata logo' width={20} height={20}/>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

        </Stack>
        <Box
        sx={{
          display: 'flex',
          justifyContent:'center'
        }}>

          <Button variant='contained' round='rounded'
          onClick={handleBuyToken}
          sx={{
            textTransform: 'capitalize', //lowercase, capitalize, none
          }}>
            Buy Now
          </Button>
        </Box>
    </Paper>
    </>
  )
}
