import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useAdminContext, useStateContext } from '../../context'
import { ethers } from 'ethers'

export const Contributor = ({data}) => {
  return (
    <Box>
        <Typography>List des contributor</Typography>
        {data.map((data,index)=>{
            return <ShowContributor key={index} data={data}/>
        })}
    </Box>
  )
}

const ShowContributor = ({data}) => {
    const {contractCrowdsale} = useStateContext()
    
    const [contribution,setContribution] = useState(0)

    const getContribution = async (address) => {
        let tokencontribution = await contractCrowdsale.call('getUserContribution',[address])
        tokencontribution= ethers.utils.formatEther(tokencontribution)
        setContribution(tokencontribution)
      }
      
    
    useEffect(()=>{
        if(contractCrowdsale){getContribution(data)}
    },[contractCrowdsale])

    return(
        <Typography> {data} = {contribution} BITJOY</Typography>
    )
}
