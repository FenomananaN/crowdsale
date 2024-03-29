import { Box, Button, Typography, Stack, InputAdornment, Divider } from '@mui/material'
import {ReactComponent as  UsdtIcon} from '../../assets/icon/tether-seeklogo.com.svg'
import {ReactComponent as  BnbIcon} from '../../assets/icon/bnb-bnb-logo.svg'

import React, { useEffect, useState } from 'react'

import { useStateContext, useUserContext } from '../../context'
import { DialogBox } from '../utils/DialogBox'

import { FormProvider, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver }from '@hookform/resolvers/yup'
import { FormInput } from '../utils/FormInput'
import { Logo } from '../../assets/icon/Logo'
import { roundNumber, roundUpNumber } from '../../utils'




export const BuyToken = ({ canBuy, setCanBuy}) => {

  
  const {preIco,rate, coreRate, address, tokenSold, investorTargetCap, secondInvestorTargetCap, thirdInvestorTargetCap } = useStateContext()

  const {buyTokens,buyTokenOnPresale,buyTokenWithUsdtOnPresale, ethBalance, usdtBalance,buyTokensWithUsdt} = useUserContext()

  const [currencToPay, setCurrencyToPay] = useState('bnb')
  const [crypto, setCrypto] = useState('')
  const [token,setToken] = useState('')

  const [cap,setCap] = useState(0)

  useEffect(()=>{
    if(preIco===1){
      setCap(investorTargetCap-tokenSold)
    } else if(preIco === 2){
      setCap(secondInvestorTargetCap-tokenSold)
    } else if(preIco === 3){
      setCap(thirdInvestorTargetCap-tokenSold)
    }
    else {
      setCap(0)
    }

  },[tokenSold])

  //balance cap
  const [balanceCap,setBalnaceCap] = useState(0)
  useEffect(()=>{
    if(currencToPay === 'usdt'){
      setBalnaceCap(usdtBalance)
    }
    else {
      setBalnaceCap(ethBalance)
    }
  },[currencToPay,ethBalance,usdtBalance,address])

  const validationSchema = Yup.object().shape({
    crypto: Yup.number()
      .required("Please enter number")
      .typeError('Please enter number')
      .moreThan(0,"shouldn't be zero")
      .max(balanceCap,"Balance is not enough"),
      //.min(1,"shouldn't be zero"),
    token: Yup.number()
      .typeError('Amount must be a number')
      .required("Please enter number")
      .moreThan(0,"shouldn't be zero")
      .max(cap,"Token is not enough in this round"),
  })

  const methods = useForm({
    resolver:yupResolver(validationSchema)
  })

  const {handleSubmit,setValue,formState: { errors }} = methods

  //all method to get whether someone can buy
  /*useEffect(()=>{
    if (vestingRound === 0){
      setClaim(true)
    }
    else {
      //setClaim(dayjs.unix(vestingTime).isBefore(dayjs()))
      setClaim(dayjs.unix(vestingTime).isAfter(dayjs()))
    }
  },[vestingRound])*/
  //end 

  const onSubmit = (data) => {
 
    if(currencToPay === 'usdt'){
      const value=Math.floor(data.crypto*10**6)/10**6
      handleBuyTokenWithUsdt(value.toString())
    }
    else {
      handleBuyTokenWithEth(data.crypto.toString())
    }
  }

  //method to change currency
  const resetForm = () => {
    setCrypto('')
    setToken('')
  }

  //for connecting wallet dialog
  const [open,setOpen] = useState(false)

  const handleBuyTokenWithEth = async (crypto) => {
    if(preIco){
     // console.log('buyTokenOnPresale')
      await buyTokenOnPresale(crypto)
    } else {
     // console.log('buyTokens')
      await buyTokens(crypto)
    }
    setCrypto('')
    setToken('')
    //console.log(crypto,grfToken)
  }

  const handleBuyTokenWithUsdt = async (crypto) => {
    if(preIco){
      //console.log('buyTokenWithUsdtOnPresale')
      await buyTokenWithUsdtOnPresale(crypto)
    } else {
      //console.log('buyTokens')
      await buyTokensWithUsdt(crypto)
    }

    setCrypto('')
    setToken('')
    //console.log(crypto,grfToken)
  }

  const handleBuyToken = () =>{
    
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
    if(currencToPay === 'usdt'){
      setCrypto(value)
      setValue('crypto',value)
      setToken(roundNumber(value/rate,2))
      setValue('token',value/rate)
    }
    else{
      setCrypto(value)
      setValue('crypto',value)
      setToken(roundNumber(value*coreRate/rate,2)) //diso crowdsale rate*coreRate)
      setValue('token',value*coreRate/rate)
    }
  }

  const handleTokenOnChange = (value) =>{
    if(currencToPay === 'usdt'){
      
      setToken(value)
      setValue('token',value)

      value=Math.floor((value*rate)*10**6)/10**6
      setCrypto(value)
      setValue('crypto',value)
    }
    else{
      setToken(value)
      setValue('token',value)
      setCrypto(roundNumber(value*rate/coreRate,5)) //diso crowdsale rate*coreRate)
      setValue('crypto',roundUpNumber(value*rate/coreRate,14))
    }
  }

  return (
    <>
    <DialogBox open={open} setOpen={setOpen}/>
   {/*  <Paper sx={{
      //width: 'fit-content',
     // backgroundColor: '#282C34',
      borderRadius: 3,
      py:2,
      px:{xs:2,md:6}
    }}>*/}
    <Box>
      <Typography align='center'> 1 BITJOY = ${rate}</Typography>
       <Stack direction={'row'} spacing={2} py={1}
        sx={{
          //width: 'fit-content'
          justifyContent:'center'
        }}>
        <Button variant="outlined" round='rounded' 
          startIcon= {<BnbIcon width={25} height={25}/>}
          onClick={()=>{
            setCurrencyToPay('bnb')
            resetForm()
          }}
          sx={{
            textTransform: 'capitalize' //lowercase, capitalize, none
          }}>
            BNB
        </Button>
          <Button variant="outlined" round='rounded' 
            startIcon= {<UsdtIcon width={25} height={25}/>}
            onClick={()=>{
              setCurrencyToPay('usdt')
              resetForm()
            }}
            sx={{
              textTransform: 'capitalize' //lowercase, capitalize, none
            }}>
              USDT
          </Button>

        </Stack>

        <Typography align='center' sx={{
          color: currencToPay === 'usdt'? '#53ae94':'#F0B90B'
        }}>
          Your {currencToPay.toUpperCase()} balance = {currencToPay === 'usdt' ? roundNumber(usdtBalance,2): roundNumber(ethBalance,6)} {currencToPay.toUpperCase()}
        </Typography>
        <Divider variant='middle' sx={{
          bgcolor: currencToPay === 'usdt'? '#53ae94':'#F0B90B',
          height:2}} />

      <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack my={1} direction={'row'} spacing={1}>
          <Box >
            <Typography>
              You pay
            </Typography>

            <FormInput 
              name='crypto' label=''  
              error={errors?.crypto} 
              helperText={errors?.crypto?.message}
              onChange={(e)=>handleCryptoOnChange(e.currentTarget.value)}
              value={crypto} 
              size='small'
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    {currencToPay === 'usdt' ? <UsdtIcon width={20} height={20} /> :<BnbIcon width={20} height={20} />}
                  </InputAdornment>
                ),
              }}/>
          </Box>

          <Box >
            <Typography>You receive</Typography>
            <FormInput 
              name='token' label=''  
              error={errors?.token} 
              helperText={errors?.token?.message}
              onChange={(e)=>handleTokenOnChange(e.currentTarget.value)}
              value={token} 
              size='small'
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Logo/>
                    {/* <Bitcoin width={20} height={20}/>*/}
                  </InputAdornment>
                ),
              }}/>

          </Box>

        </Stack>
        <Box
        sx={{
          display: 'flex',
          justifyContent:'center'
        }}>
          { address ?
          <Button variant='contained' color='main' round='rounded'
          //onClick={handleBuyToken}
          disabled={!canBuy}
          type='submit'
          sx={{
            textTransform: 'capitalize', //lowercase, capitalize, none
            border: '1px solid white'
          }}>
            Buy Now
          </Button>
          :
          <Button variant='contained' color='main' round='rounded'
          disabled={!canBuy}
          onClick={()=> setOpen(true)}
          sx={{
            textTransform: 'capitalize', //lowercase, capitalize, none
            border: '1px solid white'
          }}>
            Buy Now
          </Button>
          }
        </Box>
      </form>
      </FormProvider>
      </Box>
    {/*</Paper>*/}
    </>
  )
}
