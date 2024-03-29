import React from 'react'
import { Footer, Header } from '../component'
import { UserContextProvider } from '../context'
import { About, Airdrop, Community, Crowdsale, FAQ, Home, Tokenomics} from '../scene'

export const User = () => {
  return (
    <UserContextProvider>
      <Header/>
      <Home id={'Home'}/>
      <About id={'About'}/>
      {/*<Crowdsale id={'tokensale'}/>*/}
      <Community id={'Community'}/>
      <Airdrop id={"Airdrop"}/>
      <Tokenomics id={'Tokenomics'} />
      
      <FAQ id='FAQ'/>
      <Footer/>
    </UserContextProvider>
  )
}
