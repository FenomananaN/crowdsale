import React from 'react'
import { Crowdsale } from '../component'
import { UserContextProvider } from '../context'

export const Home = () => {
  return (
    <UserContextProvider>
      <Crowdsale/>
    </UserContextProvider>
  )
}
