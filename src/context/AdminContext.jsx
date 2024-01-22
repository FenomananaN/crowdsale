import { ethers } from 'ethers';
import React, { useContext, createContext, useEffect, useState } from 'react'
import { useStateContext } from './StateContext';
import { useContractRead, useContractWrite } from '@thirdweb-dev/react';
import { tokenAbi, tokenAddress, usdtDecimal } from '../contract';
import { Loading } from '../component';
import { Login } from '../auth';

const AdminContext = createContext();

export const AdminContextProvider = ({children}) => {

  //for authentification
  const [auth,setAuth] = useState(false)
  
  const { contractCrowdsale, address } = useStateContext()

  //loading transaction
  const [isLoading,setLoading] = useState(false)
  const [loadingMessage,setLoadingMessage] = useState('')

   //owner wallet getWallet
  const { data:walletOwner, isLoading:isWalletOwnerLoading, error: getWalletError } = useContractRead(contractCrowdsale, 'getWallet');
  
   //admin
  //get contract crowdsale usdt balance
  const { data:_crowdsaleUsdtBalance, isLoading:crowdsaleUsdtBalanceLoading, error: crowdsaleUsdtBalanceError } = useContractRead(contractCrowdsale, 'crowdsaleUsdtBalance');
  const [crowdsaleUsdtBalance,setCrowdsaleUsdtBalance] = useState(0)

  // for authentification
  const login = (isAuthed) => {
    setAuth(isAuthed)
  }

  //admin
  const _setCrowdsaleUsdtBalance = () => {
    setCrowdsaleUsdtBalance(ethers.utils.formatUnits(_crowdsaleUsdtBalance,'mwei').toString())
  }

  useEffect(()=>{
    if(_crowdsaleUsdtBalance){
      _setCrowdsaleUsdtBalance()
    }
  },[_crowdsaleUsdtBalance])
  //END get contract crowdsale usdt balance
  
  // only needed for minting token
/////////////////////////////////////////
  /*connect to contract without third web*/
  //using ethersjs v5
  const [contractRaw, setContractRaw] = useState(null)
  const connectToRawContract = () => {
    try{

      //must connect to methamask before calling this
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()

      const contract = new ethers.Contract(
        tokenAddress,//contractAddress.Token,
        tokenAbi,
        provider
      )
      setContractRaw({
        contract:contract,
        signer: signer
      })
      console.log('contract Raw loaded')
    } catch (e){
      console.log('error to connect to contract', e)
    }
  }
  
  useEffect(()=>{
    if(address && !contractRaw ){connectToRawContract()}
  },[address])
  /*end connect to contract without third web*/
  ////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////////////////
  ///all for crowdsale
  
  //admin
  const { mutateAsync: _setCrowdsaleStage,isLoading:isSetCrowdsaleStageLoading, error:setCrowdsaleStageError} = useContractWrite(contractCrowdsale, 'setCrowdsaleStage');
  const setCrowdsaleStage = async (stage,value) => {

    console.log(`make ${stage} the crowdsale`)
    setLoadingMessage(`make ${stage} the crowdsale`)
    setLoading(true)
    try {
      const data = await _setCrowdsaleStage({
				args: [
					value, // 0
				],
			});

      console.log("contract call succeed to setCrowdsale to "+stage, data)
      setLoading(false)
    } catch (error) {
      console.log("contract call failure to setCrowdsale to "+stage, error)
      setLoading(false)
    }
  }


  //withdraw usdt token 
  const { mutateAsync: _withdrawUsdt } = useContractWrite(contractCrowdsale, 'withdrawUsdt');
  const withdrawUsdt = async () => {
    setLoadingMessage(`Withdraw USDT`)
    setLoading(true)
    
    try {
      const data = await _withdrawUsdt({
				args: [
				],
			});

      console.log("contract call to withdraw usdt successed", data)
      setLoading(false)
    } catch (error) {
      console.log("contract call failure to withdraw usdt", error)
      setLoading(false)
    }
  }

  //set Investor Target cap
  const { mutateAsync: _setInvestorTargetCap } = useContractWrite(contractCrowdsale, 'setInvestorTargetCap');
  const setInvestorTargetCap = async (value) => {
    setLoadingMessage(`setInvestorTargetCap ${value}`)
    setLoading(true)

    value=ethers.utils.parseUnits(value, usdtDecimal)
    
    try {
      const data = await _setInvestorTargetCap({
				args: [
          value
				],
			});

      console.log("contract call to setInvestorCap successed", data)
      setLoading(false)
    } catch (error) {
      console.log("contract call failure to setInvestor", error)
      setLoading(false)
    }
  }


  //set time crowdsale
  const { mutateAsync: _setTimeCrowdsale } = useContractWrite(contractCrowdsale, 'setTimeCrowdsale');
  const setTimeCrowdsale = async (value) => {
    setLoadingMessage(`setTimeCrowdsale ${value}`)
    setLoading(true)

    value=ethers.utils.parseUnits(value, 0)
    
    try {
      const data = await _setTimeCrowdsale({
				args: [
          value
				],
			});

      console.log("contract call to setTimeCrowdsale successed", data)
      setLoading(false)
    } catch (error) {
      console.log("contract call failure to setTimeCrowdsale", error)
      setLoading(false)
    }
  }

  //read contributor list
  const [contributorList,setContributorList] = useState(null)
   const { data:_contributorList, isLoading:isContributorListLoading, error: getContributorListError } = useContractRead(contractCrowdsale, 'getContributors');
   useEffect(()=>{
    if(_contributorList){
      setContributorList(_contributorList)
    }
   },[_contributorList])
  /// END read contributor list

  

  return (
    <AdminContext.Provider
        value={{
          crowdsaleUsdtBalance,
          withdrawUsdt,
          setCrowdsaleStage,
          contractRaw,
          connectToRawContract,
          etInvestorTargetCapsetInvestorTargetCap,
          setTimeCrowdsale,
          contributorList,
          login,
          walletOwner,
        }}>
            {auth ? children : <Login/>}
            {isLoading && <Loading message={loadingMessage}/>}
    </AdminContext.Provider>
  )
}

export const useAdminContext = () => useContext(AdminContext);