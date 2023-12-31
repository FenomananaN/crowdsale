import { Box, Button } from '@mui/material'
import React from 'react'
import { useUserContext } from '../../context'


export const ClaimToken = () => {
  
  const {claimTokens} = useUserContext()

  return (
    <Box>
        <Button 
        variant='contained' 
        round='rounded'
        sx={{
            textTransform: 'capitalize' //lowercase, capitalize, none
          }}
        onClick={async () => await claimTokens()}
        >
            Claim
        </Button>
    </Box>
  )
}
