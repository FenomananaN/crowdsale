import React from 'react'
import { Header } from '../component'
import { UserContextProvider } from '../context'
import { About, Community, Crowdsale, FAQ, Home, Tokenomics} from '../scene'

export const User = () => {
  return (
    <UserContextProvider>
      <Header/>
      <Home id={'Home'}/>
      <About id={'About'}/>
      <Crowdsale id={'Presale'}/>
      <Community id={'Community'}/>
      <Tokenomics id={'Tokenomics'} />
      <FAQ id='FAQ'/>
    </UserContextProvider>
  )
}
