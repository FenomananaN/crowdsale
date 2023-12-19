import React from 'react'
import { ConnectWallet } from "@thirdweb-dev/react";

export const ConnectWalletComponent = () => {
  return (
    <ConnectWallet
    theme={"dark"}
    modalTitle={"Choisir Wallet"}
    modalSize={"compact"}
    welcomeScreen={{ title: "aas" }}
    modalTitleIconUrl={""}
/>
  )
}
