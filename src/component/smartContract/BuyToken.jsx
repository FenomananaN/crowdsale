import { Box, Button, Typography, Stack, TextField, FormControl, InputLabel, Input, InputAdornment, InputBase } from '@mui/material'
import {ReactComponent as  UsdtIcon} from '../../assets/icon/tether-seeklogo.com.svg'
import {ReactComponent as  EtheriumIcon} from '../../assets/icon/ethereum-eth.svg'

import React, { useState } from 'react'
import { AccountCircle } from '@mui/icons-material'

import { useStateContext } from '../../context'

export const BuyToken = () => {
  
  const {preIco,balance,buyTokens,buyTokenOnPresale,rate,ethRate} = useStateContext()

  const [currencToPay, setCurrencyToPay] = useState('usdt')
  const [crypto, setCrypto] = useState('')
  const [grfToken,setGrfToken] = useState('')

  const handleBuyToken = async () => {
    if(preIco){
      console.log('buyTokenOnPresale')
      await buyTokenOnPresale(crypto)
    } else {
      console.log('buyTokens')
      await buyTokens(crypto)
    }
    //console.log(crypto,grfToken)
  }

  const handleCryptoOnChange = (value) =>{
    setCrypto(value)
    console.log(ethRate)

    setGrfToken(value*ethRate)
  }

  return (
    <Box>
       <Stack direction={'row'} spacing={2} py={1}
        sx={{
          width: 'fit-content'
        }}>
          <Button variant="outlined" round='rounded' 
            startIcon= {<UsdtIcon width={25} height={25}/>}
            onClick={()=>setCurrencyToPay('usdt')}
            sx={{
              textTransform: 'capitalize' //lowercase, capitalize, none
            }}>
              USDT
          </Button>

          <Button variant="outlined" round='rounded' 
            startIcon= {<EtheriumIcon width={25} height={25}/>}
            onClick={()=>setCurrencyToPay('eth')}
            sx={{
              textTransform: 'capitalize' //lowercase, capitalize, none
            }}>
              ETH
          </Button>
        </Stack>

        <Typography>Your {currencToPay.toUpperCase()} balance is 0</Typography>

        <Stack my={1} direction={'row'} spacing={1}>
          <Box >
            <Typography>
              You pay {currencToPay.toUpperCase()}
            </Typography>

            <TextField
              variant="outlined"
              name="usdt"
              size='small'
              value={crypto}
              onChange={(e)=>handleCryptoOnChange(e.currentTarget.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {currencToPay === 'usdt' ? <UsdtIcon width={20} height={20} /> :<EtheriumIcon width={20} height={20} />}
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box >
            <Typography>You receive GRF</Typography>
            <TextField
              variant="outlined"
              name="usdt"
              size='small'
              value={grfToken}
              onChange={(e)=>setGrfToken(e.currentTarget.value)}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </Box>

        </Stack>
        <Button variant='contained' round='rounded'
        onClick={handleBuyToken}
        sx={{
          textTransform: 'capitalize' //lowercase, capitalize, none
        }}>
          Buy Now
        </Button>
    </Box>
  )
}
