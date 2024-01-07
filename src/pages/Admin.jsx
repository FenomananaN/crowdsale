import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {ConnectWalletButton, Contributor, DialogBox, MintToken, Table} from '../component'
import { AdminContextProvider, useAdminContext, useStateContext } from '../context'

import {ReactComponent as  UsdtIcon} from '../assets/icon/tether-seeklogo.com.svg'
//import {ReactComponent as  EtheriumIcon} from '../../assets/icon/ethereum-eth.svg'
import { DatePicker, TimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs'

export const Admin = () => {
    return (
        <AdminContextProvider>
            <AdminLayout/>
        </AdminContextProvider>
    )
   
}

const AdminLayout = () => {
    const { token, preIco, coreRate, address, timeCrowdsale, fundsRaised, usdtRaised, weiRaised, investorTargetCap, tokenSold, crowdsaleTokenBalance } = useStateContext()
    const { setCrowdsaleStage,crowdsaleUsdtBalance, withdrawUsdt, setInvestorTargetCap,setTimeCrowdsale, contributorList} = useAdminContext()

    const [open, setOpen] = useState(false)
    const [targetCap,setTargetCap] = useState('')
    const [dateCrowdsale,setDateCrowdsale] = useState(null)
    const [timeCr,setTimeCr]= useState(null)

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

    const handleSetNewTargetCap = async () => {
        if(!address){
            setOpen(true)
        } else {
            if(targetCap){
                await setInvestorTargetCap(targetCap)
            }
            else {
                alert('can be null')
            }
        }
    }

    const handleTimeCrowdsale =async () => {
        if(!address){
            setOpen(true)
        } else {

            if(dateCrowdsale !== null && timeCr !== null){
                const newTime= dayjs(dateCrowdsale.format('YYYY-MM-DD')+' '+timeCr.format('HH:mm:ss'))
                console.log(newTime.toString())
                console.log(newTime.format('YYYY-MM-DD HH:mm:ss'))
                console.log(newTime.unix())

                await setTimeCrowdsale(newTime.unix().toString())
            }
            else{
                alert('can t be null')
            }
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
        <Box p={3}>
            <Typography>Funds Raised: {fundsRaised} USDT</Typography>
            <Typography>BNB Raised: {weiRaised} BNB</Typography>
            <Typography>Usdt Raised: {usdtRaised} USDT</Typography>
            <Typography>Time : {timeCrowdsale} sec</Typography>
            <Typography>Target Cap: {investorTargetCap} USDT</Typography>
            <Typography>Token Sold: {tokenSold} TATA</Typography>
            <Typography>Total number of Token: {token.totalSupply} BITJOY</Typography>
            <Typography>Token Owned By SmartContract: {crowdsaleTokenBalance} BITJOY</Typography>
        </Box>

        <Box p={3}>
            { contributorList !== null && <Contributor data={contributorList}/>
            }
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

        <Box p={3}>
            <Typography>Target USDT to get</Typography>
            <Stack direction={'row'} spacing={1}>
                <TextField onChange={(e)=>setTargetCap(e.target.value)}/>
                <Button variant='contained' onClick={handleSetNewTargetCap}>Change</Button>
            </Stack>
        </Box>

        <Box p={3} display={'flex'} flexDirection={'column'} sx={{width:'fit-content'}}>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker value={dateCrowdsale} onChange={(newValue) => setDateCrowdsale(newValue)} />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker value={timeCr} onChange={(newValue) => setTimeCr(newValue)} />
            </LocalizationProvider>

            <Button variant='contained' onClick={handleTimeCrowdsale}>Set</Button>
        </Box>

        
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
