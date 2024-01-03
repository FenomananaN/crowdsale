import React ,{ useEffect } from 'react'
import {
  useNetworkMismatch,
  useNetwork,
  ConnectWallet,
  useAddress,
  useConnectionStatus
  } from "@thirdweb-dev/react";
import { currentChainId } from '../../contract';


export const ConnectWalletButton = () => {

  const address = useAddress(); // Get connected wallet address
  const [, switchNetwork] = useNetwork(); // Switch to desired chain
  const isMismatched = useNetworkMismatch(); // Detect if user is connected to the wrong network


  useEffect(() => {
    if (isMismatched) {
      switchNetwork(currentChainId)
    }
  }, [address]); 

  return (
    <ConnectWallet
      theme={"dark"}
      modalTitle={"Choisir Wallet"}
      modalSize={"compact"}
      welcomeScreen={{ title: "aas" }}
      modalTitleIconUrl={""}
      style={{
        backgroundColor: '#0B5E8F', 
        color:'#fff', 
        marginLeft:3, 
        paddingTop:address ? 3 : {xs:0,md:''},
        paddingBottom:address ? 3 : {xs:0,md:''},
        }}
    />
  )
}

