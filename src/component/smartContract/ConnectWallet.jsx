import React ,{ useEffect } from 'react'
import {
  useNetworkMismatch,
  useNetwork,
  ConnectWallet,
  darkTheme,
 // useAddress,
 // useConnectionStatus
  } from "@thirdweb-dev/react";
import { currentChainId } from '../../contract';
import { useStateContext } from '../../context';
import { Box, Typography } from '@mui/material';
import { Logo } from '../../assets/icon/Logo';


export const ConnectWalletButton = () => {

  const {address} = useStateContext()
  //const address = useAddress(); // Get connected wallet address
  const [, switchNetwork] = useNetwork(); // Switch to desired chain
  const isMismatched = useNetworkMismatch(); // Detect if user is connected to the wrong network


  useEffect(() => {
    if (isMismatched) {
      switchNetwork(currentChainId)
    }
  }, [address]); 

  return (
    <ConnectWallet
      
      theme={darkTheme({
        colors: { secondaryText: "#fff" },
      })}
      modalTitle={"Choisir Wallet"}
      btnTitle={"CONNECT WALLET"}
      //modalSize={"compact"}
      welcomeScreen={()=>{
        return <SideConnectWallet/>
      }}
      switchToActiveChain={true}
      modalTitleIconUrl={""}
      style={{
        background: "linear-gradient(45deg, #C2992D, #8f6b2e)",
        wordSpacing: -5, 
        border: '1px solid white',
        color:'#fff', 
        fontFamily: 'Supply',
        marginLeft:3, 
        paddingTop:address ? 3 : {xs:0,md:''},
        paddingBottom:address ? 3 : {xs:0,md:''},
        }}
    />
  )
}

const SideConnectWallet = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width:'100%',
      height:'100%',
      p:3,
    }}>
      <Logo width={'15vw'} height={'15vw'} sx={{mt: 'auto'}}/>
      <Typography sx={{fontFamily: 'Merchant', fontSize: '3vw', mt:2}}>BITJOY</Typography>
      <Typography sx={{mt: 'auto'}}>Connect your wallet to buy BITJOY Token</Typography>
    </Box>
  )
} 

