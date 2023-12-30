import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {MintToken} from '../component'
import { AdminContextProvider, useAdminContext, useStateContext } from '../context'

import {ReactComponent as  UsdtIcon} from '../assets/icon/tether-seeklogo.com.svg'
//import {ReactComponent as  EtheriumIcon} from '../../assets/icon/ethereum-eth.svg'
import {ReactComponent as  CoreIcon} from '../assets/icon/core-logo.svg'
import { ethers } from 'ethers'

export const Admin = () => {
    return (
        <AdminContextProvider>
            <AdminLayout/>
        </AdminContextProvider>
    )
   
}

const AdminLayout = () => {
    const { preIco, coreRate } = useStateContext()
    const { setCrowdsaleStage,crowdsaleUsdtBalance, withdrawUsdt} = useAdminContext()

   // const [_ethPrice, setEthPrice] = useState('0')

    const handleEndPresale = () => {
        setCrowdsaleStage('Ico', 0)
    }

    const handleBackToPresale = () => {
        setCrowdsaleStage('PreIco', 1)
    }

   /* useEffect(()=>{
        if(ethPrice){
            let eth = Number(ethPrice.toString())/10**8
            setEthPrice(eth)
        }
        console.log('eth price', ethPrice)
    },[ethPrice])*/
  return (
    <Box>
        <Typography mt={3} mx={3}>
            1 core = {coreRate} USD
        </Typography>
        <Typography mx={3} mb={3}>
            
        1 usd = {1/coreRate} CORE
        </Typography>

        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            px:3
        }}>
            <UsdtIcon width={35} height={35}/>
            <Typography sx={{pl:1}}>{crowdsaleUsdtBalance} usdt</Typography>
            <Button variant='contained' sx={{ml:2}}  onClick={ async ()=> await withdrawUsdt()}>Withdraw</Button>
        </Box>
        
        {preIco ? 
        <Box p={3}>
        <Typography>We are on preSale</Typography>
        <Typography>End presale now</Typography>
        <Button variant='contained' onClick={handleEndPresale}>End Presale</Button>
        </Box>
        :
        <Box p={3}>
        <Typography>You've terminate presale</Typography>
        <Typography>Go back to presale</Typography>
        <Button variant='contained' onClick={handleBackToPresale}>Back to presale</Button>
        </Box>
        }
        <MintToken/>
        
    </Box>
  )
}
