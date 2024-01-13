import React ,{ useEffect } from 'react'
import {
  useNetworkMismatch,
  useNetwork,
  ConnectWallet,
 // useAddress,
 // useConnectionStatus
  } from "@thirdweb-dev/react";
import { currentChainId } from '../../contract';
import { useStateContext } from '../../context';


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
      theme={"dark"}
      modalTitle={"Choisir Wallet"}
      btnTitle={"CONNECT WALLET"}
      modalSize={"compact"}
      welcomeScreen={{ title: "aas" }}
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

