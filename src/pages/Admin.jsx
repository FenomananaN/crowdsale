import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {MintToken} from '../component'
import { useStateContext } from '../context'

export const Admin = () => {
    
    const { preIco,setCrowdsaleStage, getCrowdsaleStage, coreRate } = useStateContext()
   // const [_ethPrice, setEthPrice] = useState('0')

    const handleEndPresale = () => {
        setCrowdsaleStage('Ico', 0)
    }

    const handleBackToPresale = () => {
        setCrowdsaleStage('PreIco', 1)
    }

    const getCrowdsalestageIco = async () => {
        const data = await getCrowdsaleStage()
        console.log('call getcrowdsale', data)
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
        <Button onClick={getCrowdsalestageIco}>GetPreIco</Button>
        
        
    </Box>
  )
}
