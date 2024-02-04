import { Box, Typography } from '@mui/material'
import React from 'react'
import { numberFormatter } from '../../utils'

export const ProgressBar = ({amount,targetedAmount,amountToken,totalAmountToken}) => {

    //const withAmout= amountToken * 100 / totalAmountToken
    const withAmout= amount * 100 / targetedAmount  
    
  return (
    <Box>
        <Box sx={{
            width:{xs:'90vw', md:'50vw'},
            height: {xs:60,lg:'40px'},
            backgroundColor: '#282C34',
            borderRadius: 50,
            overflow: 'hidden',
            position: 'relative',
        }}>

            <Box sx={{
                width: `${withAmout}%`,
                height: '100%',
                backgroundColor: '#0B5E8F',
                position: 'absolute',
                zIndex: 1,
            }}>
            </Box>
            
            <Box sx={{
                width: '100%',
                height: '100%',    
                display: 'flex',
                flexDirection: {xs: 'column', lg:'row'},
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                zIndex: 2
            }}>
                <Typography>
                $ {numberFormatter.format(amount)} / $ {numberFormatter.format(targetedAmount)} 
                </Typography>
                <Typography sx={{fontSize: 10, color:'grey', fontStyle: 'italic'}}>
                ({numberFormatter.format(amountToken)} BITJOY sold / {numberFormatter.format(totalAmountToken)} BITJOY)
                </Typography>
            </Box>

        </Box>
    </Box>
  )
}
