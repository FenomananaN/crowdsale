import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useAdminContext, useStateContext } from '../../context'
import { ethers } from 'ethers'
import { Table } from './Table'

export const Contributor = ({data}) => {
  const [rows,setRows] = useState([])
  const {contractCrowdsale} = useStateContext()
  useEffect(()=>{
       // const r= getContrubitorRow(data,contractCrowdsale)
        //setRows(r)
        console.log(data.length)
        data.forEach((data)=>{
          getContrubitorRow(data,contractCrowdsale,setRows)
        })
      
      //setRows(data.map(data=>setContrubitorRow(data,contractCrowdsale)))
    
  },[])
  useEffect(()=>{console.log(rows, "contr Row")},[])

  return (
    <Box>
        <Typography>List des contributor</Typography>
        <Table data={rows}/>
    </Box>
  )
}

const getContrubitorRow = async (address,contractCrowdsale,setRows) => {
   // const {contractCrowdsale} = useStateContext()
    //const [contribution,setContribution] = useState(0)

    const getContribution = async (address) => {
        let tokencontribution = await contractCrowdsale.call('getUserContribution',[address])
        tokencontribution= ethers.utils.formatEther(tokencontribution)
        return tokencontribution
      }

    const getWeiContribution = async (address) => {
        let weicontribution = await contractCrowdsale.call('getUserWeiContribution',[address])
        weicontribution= ethers.utils.formatEther(weicontribution)
        return weicontribution
      }

    const getUsdtContribution = async (address) => {
        let usdtcontribution = await contractCrowdsale.call('getUserUsdtContribution',[address])
        usdtcontribution= ethers.utils.formatUnits(usdtcontribution, 'mwei')
        return usdtcontribution
      }

    const getFundContribution = async (address) => {
        let fundcontribution = await contractCrowdsale.call('getUserFundContribution',[address])
        fundcontribution= ethers.utils.formatUnits(fundcontribution,'mwei')
        return fundcontribution
      }

        const contribution = await getContribution(address)
        const wei = await getWeiContribution(address)
        const usdt = await getUsdtContribution(address)
        const fund = await getFundContribution(address)

      
       setRows((prevState) => [...prevState,{
        address: address,
        fund:contribution,
        wei:wei,
        usdt:usdt,
        fund:fund
       }])   
    
}
