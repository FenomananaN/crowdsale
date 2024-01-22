import { Box, Button, Typography, Stack, TextField, InputAdornment, Paper, Divider } from '@mui/material'
import {ReactComponent as  UsdtIcon} from '../../assets/icon/tether-seeklogo.com.svg'
import {ReactComponent as  BnbIcon} from '../../assets/icon/bnb-bnb-logo.svg'
import {ReactComponent as  Bitcoin} from '../../assets/icon/bitcoindown.svg'

import React, { useState } from 'react'

import { useStateContext, useUserContext } from '../../context'
import { DialogBox } from '../utils/DialogBox'

import { FormProvider, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver }from '@hookform/resolvers/yup'
import { FormInput } from '../utils/FormInput'
import { Logo } from '../../assets/icon/Logo'

const validationSchema = Yup.object().shape({
  crypto: Yup.number()
    .required("Please enter number")
    .typeError('Please enter number')
    .moreThan(0,"shouldn't be zero"),
    //.min(1,"shouldn't be zero"),
  token: Yup.number()
    .typeError('Amount must be a number')
    .required("Please enter number")
    .moreThan(0,"shouldn't be zero"),
})


export const BuyToken = () => {
  
  const {preIco,rate, coreRate, address } = useStateContext()

  const {buyTokens,buyTokenOnPresale,buyTokenWithUsdtOnPresale, ethBalance, usdtBalance,buyTokensWithUsdt} = useUserContext()

  const [currencToPay, setCurrencyToPay] = useState('usdt')
  const [crypto, setCrypto] = useState('')
  const [token,setToken] = useState('')

  const methods = useForm({
    resolver:yupResolver(validationSchema)
  })

  const {handleSubmit,setValue,formState: { errors }} = methods

  const onSubmit = (data) => {
 
    if(currencToPay === 'usdt'){
      const value=Math.floor(data.crypto*10**6)/10**6
      handleBuyTokenWithUsdt(value.toString())
    }
    else {
      handleBuyTokenWithEth(data.crypto.toString())
    }
  }

  //for connecting wallet dialog
  const [open,setOpen] = useState(false)

  const handleBuyTokenWithEth = async (crypto) => {
    if(preIco){
      console.log('buyTokenOnPresale')
      await buyTokenOnPresale(crypto)
    } else {
      console.log('buyTokens')
      await buyTokens(crypto)
    }
    setCrypto('')
    setToken('')
    //console.log(crypto,grfToken)
  }

  const handleBuyTokenWithUsdt = async (crypto) => {
    if(preIco){
      console.log('buyTokenWithUsdtOnPresale')
      await buyTokenWithUsdtOnPresale(crypto)
    } else {
      console.log('buyTokens')
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
      setToken(value*rate)
      setValue('token',value*rate)
    }
    else{
      setCrypto(value)
      setValue('crypto',value)
      setToken(value*rate*coreRate) //diso crowdsale rate*coreRate)
      setValue('token',value*rate*coreRate)
    }
  }

  const handleTokenOnChange = (value) =>{
    if(currencToPay === 'usdt'){
      
      setToken(value)
      setValue('token',value)

      value=Math.floor((value/rate)*10**6)/10**6
      setCrypto(value)
      setValue('crypto',value)
    }
    else{
      setToken(value)
      setValue('token',value)
      setCrypto(value/rate/coreRate) //diso crowdsale rate*coreRate)
      setValue('crypto',value/rate/coreRate)
    }
  }

  return (
    <>
    <DialogBox open={open} setOpen={setOpen}/>
    <Paper sx={{
      //width: 'fit-content',
     // backgroundColor: '#282C34',
      borderRadius: 3,
      py:2,
      px:{xs:2,md:6}
    }}>
      <Typography align='center'> 1 BITJOY = ${Math.floor((1/rate)*10000)/10000}</Typography>
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
          type='submit'
          sx={{
            textTransform: 'capitalize', //lowercase, capitalize, none
            border: '1px solid white'
          }}>
            Buy Now
          </Button>
          :
          <Button variant='contained' color='main' round='rounded'
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
    </Paper>
    </>
  )
}
