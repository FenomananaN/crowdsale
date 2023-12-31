import React from 'react'
import { ConnectWallet } from "@thirdweb-dev/react";

export const ConnectWalletButton = () => {
  return (
    <ConnectWallet
    theme={"dark"}
    modalTitle={"Choisir Wallet"}
    modalSize={"compact"}
    welcomeScreen={{ title: "aas" }}
    modalTitleIconUrl={""}
    style={{backgroundColor: '#0B5E8F', color:'#fff', marginLeft:3}}
/>
  )
}
