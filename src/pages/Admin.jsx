import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {ConnectWalletButton, DialogBox, MintToken} from '../component'
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
    const { preIco, coreRate, address } = useStateContext()
    const { setCrowdsaleStage,crowdsaleUsdtBalance, withdrawUsdt} = useAdminContext()

    const [open, setOpen] = useState(false)

    const handleEndPresale = () => {
        if(!address){
            setOpen(true)
        } else {
        setCrowdsaleStage('Ico', 0)
        }
    }

    const handleBackToPresale = () => {
        if(!address){
            setOpen(true)
        } else {
        setCrowdsaleStage('PreIco', 1)
        }
    }

    const handleWithdraw = async () => {
        if(!address){
            setOpen(true)
        } else {
            await withdrawUsdt()
        }
    }

  return (
    <>
    <DialogBox open={open} setOpen={setOpen}/>
    
    <Box>
        <ConnectWalletButton/>
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
            <Button variant='contained' sx={{ml:2}}  onClick={handleWithdraw}>Withdraw</Button>
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
    </>
  )
}


/*
getTimeCrowdsale
setTimeCrowdsale
getInvestorTargetCap
setInvestorTargetCap
 */
