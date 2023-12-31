import { Box, Typography } from '@mui/material'
import React from 'react'

export const ProgressBar = ({amount,targetedAmount,amountToken,totalAmountToken}) => {

    const withAmout= amountToken * 100 / totalAmountToken  
  return (
    <Box>
        <Box sx={{
            width:{xs:'80vw', md:'50vw'},
            height: {xs:60,md:'40px'},
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
                flexDirection: {xs: 'column', md:'row'},
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                zIndex: 2
            }}>
                <Typography>
                    {amount} $ / {targetedAmount}$ 
                </Typography>
                <Typography>
                ({amountToken} TATA sold / {totalAmountToken} TATA)
                </Typography>
            </Box>

        </Box>
    </Box>
  )
}
