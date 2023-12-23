import { useAddress, useConnectionStatus, useContract, useContractRead, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import React, { useContext, createContext, useEffect, useState } from 'react'
import { Loading } from '../component/ui/Loading';
import { crowdsaleAbi, crowdsaleAddress, tetherAbi, tetherAddress, tokenAbi, tokenAddress } from '../contract';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {

  const [preIco, setPreIco] = useState('')

  const [balance,setBalance] = useState(0)
  
  const [claim,setClaim] = useState(false)
    
  const [token, setToken] = useState([])

  const [ethRate,setEthRate] = useState(null)
  const [rate,setRate] = useState(null)

  
  //loading transaction
  const [isLoading,setLoading] = useState(false)
  const [loadingMessage,setLoadingMessage] = useState('')

    
  const { contract:contractToken, isLoading:isContractTokenLoading , error:contractTokenError, isSuccess:isSuccessToken } = useContract(tokenAddress)
  
  const { contract:contractCrowdsale, isLoading:isContractCrowdsaleLoading , error:contractCrowdsaleError, isSuccess: isSuccessCrowdsale } = useContract(crowdsaleAddress)

  //owner wallet getWallet

  const { data:walletOwner, isLoading:isWalletOwnerLoading, error: getWalletError } = useContractRead(contractCrowdsale, 'getWallet');
  ///connect to usdt contract ////////////////
  const [tetherContract, setUsdtContract] = useState(null)
  const [tetherLoading, setTetherLoading] = useState(false)

  const connectToThetherContract = () => {
    try{
      setTetherLoading(true)
      //must connect to methamask before calling this
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()

      const contract = new ethers.Contract(
        tetherAddress,//contractAddress.Token,
        tetherAbi,
        provider
      )
      setUsdtContract({
        contract:contract,
        signer: signer
      })
      console.log('contract Raw tether loaded')
      setTetherLoading(false)
    } catch (e){
      console.log('error to connect to contract', e)
    }
  }
  

  useEffect(()=>{
    connectToThetherContract()
  },[])
  ///////////end connect to usdt contract /////////////


  //hook for connecting to wallet status
  //value can be 'unkown' 'connecting' 'connected'  
  const connectionStatus = useConnectionStatus()
  const address = useAddress()

  const getTokenName = async () => {
    const name = await contractToken.call('name');
    return name
  }

  const getTokenSymbol = async () => {
    const symbol = await contractToken.call('symbol');
    return symbol;
  }

  const getTokenTotalSupply = async () => {
    const totalSupply = await contractToken.call('totalSupply');
    return totalSupply;
  }

  const getBalanceOf = async (address) => {
    const balance = await contractToken.call('balanceOf',[address])
    console.log(balance.toString())
    return balance.toString()
  }

  const { data:balanceData, isLoading:getBalanceOfLoading, error: getBalanceOfError } = useContractRead(contractToken, 'balanceOf',[address]);
  const { data:balanceContributorData, isLoading:getBalanceContributorLoading, error: getBalanceContributorError } = useContractRead(contractCrowdsale, 'getUserContribution',[address]);


  useEffect(()=>{
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

  //for rate and eth rate
  const { data:_ethRate, isLoading:ethRateLoading, error: ethRateError } = useContractRead(contractCrowdsale, 'getEthRate');
  useEffect(()=>{
    if(_ethRate !== undefined){
      setEthRate(Number(_ethRate))
    }
  },[_ethRate])
  
  const { data:_usdRate, isLoading:usdRateLoading, error: usdRateError } = useContractRead(contractCrowdsale, 'getRate')
  useEffect(()=>{
    if(_usdRate !== undefined){
      setRate(Number(_usdRate))
    }
  },[_usdRate])

//set token data
const getTokenData = async () => {
  const name = await getTokenName()
  const symbol = await getTokenSymbol()
  const totalSupply = await getTokenTotalSupply()
  console.log(name,symbol,ethers.utils.formatEther(totalSupply))
  setToken({    
      name:name,
      symbol:symbol
  })
}
useEffect(()=>{
  if(isSuccessToken){getTokenData()}
},[address,isSuccessToken])


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


  //getEth price
  const { data:ethPrice, isLoading:ethPriceLoading, error: ethError } = useContractRead(contractCrowdsale, 'getEthPrice');

  
  const { mutateAsync: _setCrowdsaleStage,isLoading:isSetCrowdsaleStageLoading, error:setCrowdsaleStageError} = useContractWrite(contractCrowdsale, 'setCrowdsaleStage');
  const setCrowdsaleStage = async (stage,value) => {

    console.log(`make ${stage} the crowdsale`)
    setLoadingMessage(`make ${stage} the crowdsale`)
    setLoading(true)
    //from ethers 6 : utils is no longer available
    //value=ethers.utils.parseUnits(value, 18)
    //console.log(value, 'feno')
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


  //two method to get 
  const { data:preIcoData, isLoading:getCorwdsaleLoading, error , } = useContractRead(contractCrowdsale, 'getCrowdsaleStage');
  useEffect(()=>{
    if(preIcoData !== undefined){
      setPreIco(Boolean(Number(preIcoData.toString())))
    }
  },[preIcoData])

  const getCrowdsaleStage = async () => {
    const data = await contractCrowdsale.call('getCrowdsaleStage')
    return Boolean(Number(data.toString()))
  }
 


  //Buy Token
  const { mutateAsync: _buyTokens } = useContractWrite(contractCrowdsale, 'buyTokens');
  const buyTokens = async (value) => {
    setLoadingMessage(`Buying ${value} Token`)
    setLoading(true)
    //from ethers 6 : utils is no longer available
    value=ethers.utils.parseUnits(value, 18)
    
    try {
      const data = await _buyTokens({
				args: [
					address, // address who buy token
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



  //buy Tokens on preSale
  const { mutateAsync: _buyTokenOnPresale } = useContractWrite(contractCrowdsale, 'buyTokenOnPresale');
  const buyTokenOnPresale = async (value) => {
    setLoadingMessage(`Buying ${value} Token`)
    setLoading(true)
    //from ethers 6 : utils is no longer available
    value=ethers.utils.parseUnits(value, 18) //'ether'
    
    try {
      const data = await _buyTokenOnPresale({
				args: [
					address, // address who buy token
				],
        overrides: {
            gasLimit: 1000000, // override default gas limit
            value: value//utils.parseEther("0.1"), // send 0.1 native token with the contract 
        }
			});

      console.log("contract call to buy on presale token successed", data)
      setLoading(false)
    } catch (error) {
      console.log("contract call failure to buy on presale token", error)
      setLoading(false)
    }
  }

  //buy token on presale with usdt
  //buy Tokens on preSale
  const { mutateAsync: _buyTokenWithUsdtOnPresale } = useContractWrite(contractCrowdsale, 'buyTokensWithUsdt');
  const buyTokenWithUsdtOnPresale = async (value) => {
    setLoadingMessage(`Buying ${value} Token`)
    setLoading(true)
    //from ethers 6 : utils is no longer available
    value=ethers.utils.parseUnits(value, 18)
    
    try {
      const data = await _buyTokenWithUsdtOnPresale({
				args: [
					address, // address who buy token
          value
				],
        overrides: {
            gasLimit: 1000000, // override default gas limit
           // value: value//utils.parseEther("0.1"), // send 0.1 native token with the contract 
        }
			});

      console.log("contract call to buy on presale token successed", data)
      setLoading(false)
    } catch (error) {
      console.log("contract call failure to buy on presale token", error)
      setLoading(false)
    }
  }


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

  return (
    <StateContext.Provider
      value={{ 
        preIco,
        balance,
        claim,
        token,
        ethPrice,
        ethRate,
        rate,
        contractRaw,
        setCrowdsaleStage,
        buyTokens,
        buyTokenOnPresale,
        buyTokenWithUsdtOnPresale,
        claimTokens,
     //   data,
      }}
    >
      {children}
      { isContractTokenLoading  && isContractCrowdsaleLoading && <Loading message={'Contract Loading'}/>}
      { isLoading && <Loading message={loadingMessage}/>}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);