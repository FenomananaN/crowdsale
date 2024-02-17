import { ethers } from 'ethers';
import React, { useContext, createContext, useEffect, useState } from 'react'
//import { useStateContext } from './StateContext';
import { useContractRead, useContractWrite } from '@thirdweb-dev/react';
import { crowdsaleAddress, usdtDecimal } from '../contract';
import { useStateContext } from '.';
import { ErrorMetamask, Loading, ShowError } from '../component';
import { roundNumber } from '../utils';

const UserContext = createContext();

export const UserContextProvider = ({children}) => {

  const { contractToken,contractCrowdsale, preIco, coreRate, address ,tetherContract, rate } = useStateContext()

 
  //user grf
  const [balance,setBalance] = useState(0)

  //grf balance on claim
  const [claimBalance,setClaimBalance] = useState(0)

  //user balance core
  const [ethBalance, setEthBalance] = useState(0);

  //user balance usdt
  const [usdtBalance, setUsdtBalance] = useState(0);
  
  //index or user
  const [claim,setClaim] = useState(false)

  //loading transaction
  const [isLoading,setLoading] = useState(false)
  const [loadingMessage,setLoadingMessage] = useState('')

  //error message
  const [error, setError] = useState(false)
  const [errorMessage,setErrorMessage] = useState('')

  //error on metamask
  const [errorMetamask,setErrorMetamask] = useState(false)


  ///get usdt balance ////////////////

  const getUsdtBalance = async () => {
    try{

      //get balance teher
      const balance = await tetherContract.contract.balanceOf(address)
      setUsdtBalance(Number(ethers.utils.formatUnits(balance, usdtDecimal)))
      
    } catch (e){
      console.log('UserContext: error get usdt balance', e)
    }
  }
  

  useEffect(()=>{
    if(address && tetherContract){
      getUsdtBalance()
    }
  },[tetherContract])
  ///////////end get usdt balance  /////////////

  
  const { data:balanceData, isLoading:getBalanceOfLoading, error: getBalanceOfError } = useContractRead(contractToken, 'balanceOf',[address]);
  
  const { data:balanceContributorData, isLoading:getBalanceContributorLoading, error: getBalanceContributorError } = useContractRead(contractCrowdsale, 'getUserContribution',[address]);

  useEffect(()=>{
    if(balanceContributorData !== undefined && balanceData !== undefined){
      if(preIco){
        setBalance(ethers.utils.formatEther(balanceContributorData))
      }
      else{
        setBalance(Number(ethers.utils.formatEther(balanceData)))
      }
    }
  },[balanceData,balanceContributorData,preIco,address])

  useEffect(()=>{
    if(balanceContributorData !== undefined && preIco === 0){
      const balance = Number(ethers.utils.formatEther(balanceContributorData))
      setClaimBalance(balance)
      if(balance>0){
        setClaim(true)
      }
      else {
        setClaim(false)
      }
    }
  },[balanceContributorData,preIco,address])
  /*useEffect(()=>{
    if(balanceContributorData !== undefined && balanceData !== undefined){
          
      if(preIco){
        console.log('on presale',balanceContributorData)
        setBalance(ethers.utils.formatEther(balanceContributorData))
      }
      else{
        
        console.log('balance contributor',balanceContributorData)
        const balance = Number(ethers.utils.formatEther(balanceContributorData))

        if(balance>0){
          setBalance(balance)
          setClaim(true)
        }
        else {
          console.log('balance token', balanceData)
          setBalance(Number(ethers.utils.formatEther(balanceData)))
        }
      }
    } else {
      console.log('all balance data is still undefined')
    }
  },[balanceData,balanceContributorData,preIco])
*/

//user
/////////////////////////////////////////////////////////////
//// Get native eth ///////////
const getNativeEth =async () =>{
  
    //must connect to methamask before calling this
    if(address){
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()

      const balance = await provider.getBalance(address);
      setEthBalance(Number(ethers.utils.formatEther(balance)))
    }
}

useEffect(()=>{getNativeEth()},[address])


////////////////////////////////////////////////////////////////////////////////
//////////// ALL METHOD TO BUY TOKEN ////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

  //user
  //Buy Token
  const { mutateAsync: _buyTokens } = useContractWrite(contractCrowdsale, 'buyTokens');
  const buyTokens = async (value) => {
    setLoadingMessage(`Buying ${roundNumber(value*coreRate/rate,2)} Token`)
    setLoading(true)
    //from ethers 6 : utils is no longer available
    value=ethers.utils.parseUnits(value, 18)
    const f= coreRate.toString()
    const coreRateInBigN=ethers.utils.parseUnits(f,18)
    
    try {
      const data = await _buyTokens({
				args: [
					address, // address who buy token
          coreRateInBigN,
				],
        overrides: {
            gasLimit: 1000000, // override default gas limit
            value: value//utils.parseEther("0.1"), // send 0.1 native token with the contract 
        }
			});

      console.log("contract call to buy token successed", data)
      setLoading(false)
    } catch (error) {
      console.log("contract call failure to buy token", error)
      setLoading(false)
    }
  }

  //user
  //Buy Token with usdt
  const { mutateAsync: _buyTokensWithUsdt } = useContractWrite(contractCrowdsale, 'buyTokensWithUsdt');
  const buyTokensWithUsdt= async (value) => {
    setLoadingMessage(`Buying ${roundNumber(value/rate,2)} Token`)
    setLoading(true)
    //from ethers 6 : utils is no longer available
    value=ethers.utils.parseUnits(value, usdtDecimal)

    try {
      const data = await _buyTokensWithUsdt({
				args: [
					address, // address who buy token
          value, 
				],
        overrides: {
            gasLimit: 1000000, // override default gas limit
        }
			});

      console.log("contract call to buy token successed", data)
      setLoading(false)
    } catch (error) {
      console.log("contract call failure to buy token", error)
      setLoading(false)
    }
  }



  //user
  //buy Tokens on preSale
  const { mutateAsync: _buyTokenOnPresale } = useContractWrite(contractCrowdsale, 'buyTokenOnPresale');
  const buyTokenOnPresale = async (value) => {
    setLoadingMessage(`Buying ${roundNumber(value*coreRate/rate,2)} Token`)
    setLoading(true)
    //from ethers 6 : utils is no longer available


    //metamask error
    if(value === undefined){
      setLoading(false)
      setErrorMetamask(true)
      return null
    }
    //end metamask error
    
    value=ethers.utils.parseUnits(value, 18) //'ether'

    //checking coreRate error
    if(coreRate === undefined){
      setErrorMessage("Bnb rate is not loaded" + coreRate)
      setLoading(false)
      setError(true)
      return null
    }
    //end checking coreRate error
    const f= coreRate.toString()
    const coreRateInBigN=ethers.utils.parseUnits(f,18)
    
    try {
      const data = await _buyTokenOnPresale({
				args: [
					address, // address who buy token
          coreRateInBigN,// core rate
				],
        overrides: {
            gasLimit: 1000000, // override default gas limit
            value: value//utils.parseEther("0.1"), // send 0.1 native token with the contract 
        }
			})
      .then(
        (data)=>{console.log('sucess',data)}
      )
      .catch(
        (e)=>{
          setErrorMessage("Couldn't buy Token!")
          setError(true)
          setTimeout(()=>{
            setError(false)
          },5000)
        }
      );

      console.log("contract call to buy on presale token successed", data)
      setLoading(false)
    } catch (error) {
      console.log("contract call failure to buy on presale token", error)
      setLoading(false)
    }
  }

  //user
  //buy token on presale with usdt
  const { mutateAsync: _buyTokenWithUsdtOnPresale } = useContractWrite(contractCrowdsale, 'buyTokenWithUsdtOnPresale');
  const buyTokenWithUsdtOnPresale = async (value) => {
    setLoadingMessage(`Buying ${roundNumber(value/rate,2)} Token with usdt`)
    setLoading(true)

    //metamask error
    if(value === undefined){
      setLoading(false)
      setErrorMetamask(true)
      return null
    }
    //end metamask error
    
    value=ethers.utils.parseUnits(value, usdtDecimal)
    
    try {
      //Approuve theher
      if(tetherContract === null){
        throw "tether Contract is not loaded"
      }

      console.log(tetherContract)
      
      const approveTether = await tetherContract.contract.approve(crowdsaleAddress,value) //mbl tsy mahay gas limit
      //from ethers 6 : utils is no longer available

      console.log('approuve avy @tether', approveTether)
      //const approveTether = false
      if(approveTether){
        const data = await _buyTokenWithUsdtOnPresale({
          args: [
            address, // address who buy token
            value
          ],
          overrides: {
              gasLimit: 1000000, // override default gas limit
             // value: value//utils.parseEther("0.1"), // send 0.1 native token with the contract 
          }
        })
        .then(
          ()=>{}
        )
        .catch(
          (e)=>{
            setErrorMessage("Couldn't buy Token!")
            setError(true)
            setTimeout(()=>{
              setError(false)
            },5000)
          }
        )

        console.log("contract call to buy on presale token successed", data)
      }

      else {
        setErrorMessage("You rejected USDT approval")
        setError(true)
        setTimeout(()=>{
          setError(false)
        },5000) 
      }
      setLoading(false)

    } catch (error) {
      //console.log("contract call failure to buy on presale token", error)
      setLoading(false)
    }
  }

  //user
  //claim token
  const { mutateAsync: _claimTokens } = useContractWrite(contractCrowdsale, 'claimTokens');
  const claimTokens = async () => {
    setLoadingMessage(`Claiming Token`)
    setLoading(true)
    
    try {
      const data = await _claimTokens({
				args: [
					address, // address who claim token
				],
			});

      console.log("contract call to claim token successed", data)
      setLoading(false)
    } catch (error) {
      console.log("contract call failure to claim token", error)
      setLoading(false)
    }
  }


////////////////////////////////////////////////////////////////////////////////
//////////// END ALL METHOD TO BUY TOKEN ////////////////////////////////////
//////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////
///////////// START VESTING FUNCTION /////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
  //get first time crowdsale
  const { data:vestingRoundData } = useContractRead(contractCrowdsale, 'vestingRound',[address]);
  const [vestingRound,setVestingRound] = useState(null)
  const _setVestingRound = () => {
    setVestingRound(Number(vestingRoundData.toString()))
  }

  useEffect(()=>{
    if(vestingRoundData){
      _setVestingRound()
    }
  },[vestingRoundData])
  //END get first time crowdsale

  //get first time crowdsale
  const { data:vestingTimeData } = useContractRead(contractCrowdsale, 'vestingTime',[address]);
  const [vestingTime,setVestingTime] = useState(null)
  const _setVestingTime = () => {
    setVestingTime(vestingTimeData.toString())
  }

  useEffect(()=>{
    if(vestingTimeData){
      _setVestingTime()
    }
  },[vestingTimeData])
  //END get first time crowdsale

  //get initial contribution vesting
  const { data:_initialTokenVesting } = useContractRead(contractCrowdsale, 'initialTokenVesting',[address]);
  const [initialTokenVesting,setInitialTokenVesting] = useState(null)
  const _setInitialTokenVesting = () => {
    setInitialTokenVesting(Number(ethers.utils.formatEther(_initialTokenVesting)))
  }

  useEffect(()=>{
    if(_initialTokenVesting){
      _setInitialTokenVesting()
    }
  },[_initialTokenVesting])
  //END get initilal contributor vesting
  

////////////////////////////////////////////////////////////////////////////////////
///////////// END VESTING FUNCTION /////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
  return (
    <UserContext.Provider
        value={{
            balance,
            ethBalance,
            usdtBalance,
            claim,
            claimBalance,
            buyTokens,
            buyTokensWithUsdt,
            buyTokenOnPresale,
            buyTokenWithUsdtOnPresale,
            claimTokens,
            vestingRound,
            vestingTime,
            initialTokenVesting,
        }}>
            {children}
            {isLoading && <Loading message={loadingMessage}/>}
            <ShowError message={errorMessage} open={error} setOpen={setError}/>
            <ErrorMetamask open={errorMetamask} setOpen={setErrorMetamask}/>
            
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext);