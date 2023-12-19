import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useStateContext } from '../../context'
import { ethers } from 'ethers'

export const MintToken = () => {
    const { contractRaw, token  } = useStateContext()
    const [addressTo,setAddressTo] = useState('')
    const [amount,setAmount] = useState('')
    

    const handleTransfert = () => {
        if(!amount && !addressTo){
            alert('ne peut pas etre vide')
        }
        else{
            console.log(addressTo,amount)
             // transfer(to, amount)
            console.log('Initiating a minting...');
    
        const recipientAddress = addressTo;
        const transferAmount = amount;

       // const decimals = contract.decimals()
    
        console.log(`Minting ${transferAmount} ${token?.symbol}} tokens to ${recipientAddress}`); // from ${ownerAddress}


        const tokenWithSigner = contractRaw.contract.connect(contractRaw.signer);

        // Each DAI has 18 decimal places
        const tokenTobeMinted  = ethers.utils.parseUnits(transferAmount, 18);

        // mint token
        const tx = tokenWithSigner.mint(recipientAddress, tokenTobeMinted);
        //mintToken(addressTo,transferAmount)
       // getBalance()
        
        //const amoutToBeSent = ethers.parseUnits(amount, 18)
    
         /* const transfert = await contract.transfer(recipientAddress, amoutToBeSent)
          .then((transferResult)=>{
            console.log('result of transfert',transferResult)
          })
          .catch((error)=>{
            console.log('error',error)
          })
    
        await transfert?.wait();*/
        console.log('Mint completed')
        }
    

    }

  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 350,
        p:3
    }}>
        
    <TextField label={'Adress du recipient'} value={addressTo} onChange={(e)=>setAddressTo(e.target.value)}/>
    <TextField label={'le nombre '+token?.name} value={amount} onChange={(e)=>setAmount(e.target.value)} sx={{mt:1}}/>
    <Button variant='contained' 
    onClick={handleTransfert}
    sx={{
        mt:1
    }}>Mint</Button>
    </Box>
  )
}
