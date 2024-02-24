import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {CardShow, CardTime, ConnectWalletButton, Contributor, DialogBox, MintToken, ShowTime, Table} from '../component'
import { AdminContextProvider, useAdminContext, useStateContext } from '../context'

import {ReactComponent as  UsdtIcon} from '../assets/icon/tether-seeklogo.com.svg'
//import {ReactComponent as  EtheriumIcon} from '../../assets/icon/ethereum-eth.svg'

//import dayjs from 'dayjs'
import { convertToRate, numberFormatter } from '../utils'

export const Admin = () => {
    return (
        <AdminContextProvider>
            <AdminLayout/>
        </AdminContextProvider>
    )
   
}


const AdminLayout = () => {

    const { token, preIco, coreRate,rate,firstRate,secondRate,thirdRate, address, timeCrowdsale, secondTimeCrowdsale, thirdTimeCrowdsale,communityTimeCrowdsale, fundsRaised, usdtRaised, weiRaised, investorTargetCap,secondInvestorTargetCap, thirdInvestorTargetCap, tokenSold, crowdsaleTokenBalance } = useStateContext()
    const { setCrowdsaleStage,crowdsaleUsdtBalance, withdrawUsdt, setInvestorTargetCap, contributorList, setRatePrice , setRoundRatePrice} = useAdminContext()

    const [open, setOpen] = useState(false)

    const [targetCap,setTargetCap] = useState('')
    const [targetCapError, setTargetCapError] = useState('')
    

    const [price, setPrice] = useState('')

    //for setting price
    const [round,setRound] = useState('')
    const [roundPrice,setRoundPrice] = useState('')
    const [roundPriceError, setRoundPriceError] = useState('')
    const onSelectRoundChange = (e) => {
        setRound(e.target.value)
    }
    const handleChangeRoundPrice = async () => {
        if( !round || !roundPrice){
            setRoundPriceError('Round or price cannot be null')
            return null
        }
        else if( roundPrice > 1 || roundPrice <= 0){
            setRoundPriceError('Round price should be between 1 and 0')
            return null
        }
        else if( roundPrice <=1 && roundPrice > 0){
            await setRoundRatePrice(round,roundPrice);
        }
    }

    //TARGETCAP
    const handleSetNewTargetCap = async () => {
        if(!address){
            setOpen(true)
        } else {
            if( !round || !targetCap){
                setTargetCapError('Round or targetCap cannot be null')
                return null
            }
            else if( targetCap < 0){
                setTargetCapError('TargetCap should be positive')
                return null
            }
            else if( targetCap >= 0){
                await setInvestorTargetCap(round,targetCap)
            }
        }
    }
    //END TARGETCAP

    const handleEndPresale = () => {
        if(!address){
            setOpen(true)
        } else {
        setCrowdsaleStage('Ico', 0)
        }
    }

    const handleGoToRoundOne = () => {
        if(!address){
            setOpen(true)
        } else {
        setCrowdsaleStage('PreIco', 1)
        }
    }
    const handleGoToRoundTwo = () => {
        if(!address){
            setOpen(true)
        } else {
        setCrowdsaleStage('PreIco', 2)
        }
    }
    const handleGoToRoundThree = () => {
        if(!address){
            setOpen(true)
        } else {
        setCrowdsaleStage('PreIco', 3)
        }
    }
    const handleGoToCommunity = () => {
        if(!address){
            setOpen(true)
        } else {
        setCrowdsaleStage('Community', 4)
        }
    }


    const handleWithdraw = async () => {
        if(!address){
            setOpen(true)
        } else {
            await withdrawUsdt()
        }
    }


    const handleSetNewPrice = async () => {
        if(!address){
            setOpen(true)
        } else {
            if(price <= 1 && price >0 ){
                await setRatePrice(price)
            }
            else if(price >1 || price<0){
                alert('should be between 1 and 0')
            }
            else {
                alert('can be null')
            }
        }
    }

    
  return (
    <>
    <DialogBox open={open} setOpen={setOpen}/>
    <Box>
        <ConnectWalletButton/>
        <Typography mt={3} mx={3}>
            1 BNB = {coreRate} USD
        </Typography>
        <Typography mx={3} mb={3}>
            
        1 usd = {1/coreRate} BNB
        </Typography>

        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            px:3
        }}>
            <UsdtIcon width={35} height={35}/>
            <Typography sx={{pl:1}}>{numberFormatter.format(crowdsaleUsdtBalance)} usdt</Typography>
            <Button variant='contained' sx={{ml:2}}  onClick={handleWithdraw}>Withdraw</Button>
        </Box>
        <Box p={3}>
            <Grid container>
                <Grid item xs={12} sm={4} md={3} p={1}>
                    <CardShow title={'Fund Raised'} currency={'USDT'} value={numberFormatter.format(fundsRaised)}/>
                </Grid>
                <Grid item xs={12} sm={4} md={3} p={1}>
                    <CardShow title={'USDT Raised'} currency={'USDT'} value={numberFormatter.format(usdtRaised)}/>
                </Grid>
                <Grid item xs={12} sm={4} md={3} p={1}>
                    <CardShow title={'BNB Raised'} currency={'BNB'} value={numberFormatter.format(weiRaised)}/>
                </Grid>
            </Grid>
            <Typography>Funds Raised: {numberFormatter.format(fundsRaised)} USDT</Typography>
            <Typography>BNB Raised: {numberFormatter.format(weiRaised)} BNB</Typography>
            <Typography>Usdt Raised: {numberFormatter.format(usdtRaised)} USDT</Typography>
            <Typography>Time : {timeCrowdsale} sec</Typography>
            <Typography>Second Time: {secondTimeCrowdsale}</Typography>
            <Typography>Third Time: {thirdTimeCrowdsale}</Typography>
            <Typography>Target Cap round 1: {numberFormatter.format(investorTargetCap)} BITJOY</Typography>
            <Typography>Target Cap round 2: {numberFormatter.format(secondInvestorTargetCap)} BITJOY</Typography>
            <Typography>Target Cap round 3: {numberFormatter.format(thirdInvestorTargetCap)} BITJOY</Typography>
            <Typography>Token Sold: {numberFormatter.format(tokenSold)} BITJOY</Typography>
            <Typography>Total number of Token: {numberFormatter.format(token.totalSupply)} BITJOY</Typography>
            <Typography>Token Owned By SmartContract: {numberFormatter.format(crowdsaleTokenBalance)} BITJOY</Typography>
            <Box>
                <Typography>
                    BITJOY PRICE
                </Typography>
                <Typography>Current Price: {rate}</Typography>
                <Typography>1 Round Price: {firstRate}</Typography>
                <Typography>2 Round Price: {secondRate}</Typography>
                <Typography>3 Round Price: {thirdRate}</Typography>
            </Box>
        </Box>

        <Paper sx={{m:3, p:2}}>
            <Typography>PRESALE ROUND</Typography>
            {(() => {
                switch (preIco) {
                case 0:
                    return (<>
                    <Typography> PRESALE FINISHED</Typography>
                    <Stack direction={'row'} my={2} spacing={1}>
                        <Button variant='contained' color='main' onClick={handleGoToCommunity}>Community</Button>
                        <Button variant='contained' color='main' onClick={handleGoToRoundOne}>Round 1</Button>
                        <Button variant='contained' color='main' onClick={handleGoToRoundTwo}>Round 2</Button>
                        <Button variant='contained' color='main' onClick={handleGoToRoundThree}>Round 3</Button>
                    </Stack>
                    </>)
                case 1:
                    return ( <>
                    <Typography>Round 1</Typography>
                    <Stack direction={'row'} my={2} spacing={1}>
                        <Button variant='contained' color='main' onClick={handleGoToCommunity}>Community</Button>
                        <Button variant='contained' color='main' onClick={handleGoToRoundTwo}>Round 2</Button>
                        <Button variant='contained' color='main' onClick={handleGoToRoundThree}>Round 3</Button>
                        <Button variant='contained' color='main' onClick={handleEndPresale}>Finish Presale</Button>
                    </Stack>
                    </>)
                case 2:
                    return (<>
                    <Typography>Round 2</Typography>
                    <Stack direction={'row'} my={2} spacing={1}>
                        <Button variant='contained' color='main' onClick={handleGoToCommunity}>Community</Button>
                        <Button variant='contained' color='main' onClick={handleGoToRoundOne}>Round 1</Button>
                        <Button variant='contained' color='main' onClick={handleGoToRoundThree}>Round 3</Button>
                        <Button variant='contained' color='main' onClick={handleEndPresale}>Finish Presale</Button>
                    </Stack>
                    </>)
                case 3:
                    return (<>
                    <Typography>Round 3</Typography>
                    <Stack direction={'row'} my={2} spacing={1}>
                        <Button variant='contained' color='main' onClick={handleGoToCommunity}>Community</Button>
                        <Button variant='contained' color='main' onClick={handleGoToRoundOne}>Round 1</Button>
                        <Button variant='contained' color='main' onClick={handleGoToRoundTwo}>Round 2</Button>
                        <Button variant='contained' color='main' onClick={handleEndPresale}>Finish Presale</Button>
                    </Stack>
                    </>)
                case 4:
                    return (<>
                    <Typography> Round Finding Community</Typography>
                    <Stack direction={'row'} my={2} spacing={1}>
                        <Button variant='contained' color='main' onClick={handleGoToRoundOne}>Round 1</Button>
                        <Button variant='contained' color='main' onClick={handleGoToRoundTwo}>Round 2</Button>
                        <Button variant='contained' color='main' onClick={handleGoToRoundThree}>Round 3</Button>
                        <Button variant='contained' color='main' onClick={handleEndPresale}>Finish Presale</Button>
                    </Stack>
                    </>)
                default:
                    return null
        }
      })()}
        </Paper>

        <Box p={3}>
            { contributorList !== null && <Contributor data={contributorList}/>
            }
        </Box>

    
        <Box p={3}>
            <Typography sx={{fontWeight:'bold'}}>Price of Bitjoy</Typography>
            <Typography sx={{fontStyle:'italic'}}>Note: should be between 1 and 0</Typography>
            <Stack direction={'row'} spacing={1}>
                <TextField onChange={(e)=>setPrice(e.target.value)} color='main'/>
                <Button variant='contained' color='main' onClick={handleSetNewPrice}>Set</Button>
            </Stack>
            <Typography pt={2}>PRICE OF EACH ROUND</Typography>
            <Typography sx={{fontStyle:'italic'}}>Note: should be between 1 and 0</Typography>
            <Stack direction={'row'} mt={1} spacing={1}>
                <FormControl color='main' sx={{width:120}}>
                    <InputLabel id="round-label" >Round</InputLabel>
                    <Select
                        labelId="round-label"
                        id="round-select"
                        value={round}
                        label="Round"
                        onChange={onSelectRoundChange}
                        error={Boolean(roundPriceError)}
                    >
                        <MenuItem value={'1'}>Round 1</MenuItem>
                        <MenuItem value={'2'}>Round 2</MenuItem>
                        <MenuItem value={'3'}>Round 3</MenuItem>
                    </Select>
                </FormControl>
                <TextField color='main' onChange={(e)=>setRoundPrice(e.target.value)} error={Boolean(roundPriceError)} helperText={roundPriceError}/>
                <Button color='main' variant='contained' onClick={handleChangeRoundPrice}>Set</Button>
            </Stack>
        </Box>
        <Box p={3}>
            <Typography>Target BITJOY to get</Typography>
            <Stack direction={'row'} spacing={1}>
                <FormControl color='main' sx={{width:120}}>
                    <InputLabel id="round-label" >Round</InputLabel>
                    <Select
                        labelId="round-label"
                        id="round-select"
                        value={round}
                        label="Round"
                        onChange={onSelectRoundChange}
                        error={Boolean(targetCapError)}
                    >
                        <MenuItem value={'1'}>Round 1</MenuItem>
                        <MenuItem value={'2'}>Round 2</MenuItem>
                        <MenuItem value={'3'}>Round 3</MenuItem>
                    </Select>
                </FormControl>
                <TextField color='main' onChange={(e)=>setTargetCap(e.target.value)} error={Boolean(targetCapError)} helperText={targetCapError}/>
                <Button variant='contained' onClick={handleSetNewTargetCap} color='main'>Change</Button>
            </Stack>
        </Box>
        <Box p={3}>
            {timeCrowdsale && <ShowTime round={1} time={timeCrowdsale}/>}
            {communityTimeCrowdsale && <ShowTime round={4} time={communityTimeCrowdsale}/>}
            {secondTimeCrowdsale && <ShowTime round={2} time={secondTimeCrowdsale}/>}
            {thirdTimeCrowdsale && <ShowTime round={3} time={thirdTimeCrowdsale} />}
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
