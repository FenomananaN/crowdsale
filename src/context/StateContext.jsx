import { useAddress, useBalance, useConnectionStatus, useContract, useContractRead, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import React, { useContext, createContext, useEffect, useState } from 'react'
import { Loading, SplashScreen } from '../component'
import { crowdsaleAbi, crowdsaleAddress, tetherAbi, tetherAddress, tokenAbi, tokenAddress, usdtDecimal } from '../contract';

//index
const cc= require('cryptocompare')
cc.setApiKey('b36bd91ed0a30ceaf6c090a5cf0cb352394f97ba99bc318e62e5896550046257')

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {


//index
  const [preIco, setPreIco] = useState('')

  
  //index
  const [token, setToken] = useState([])

  //index
  const [coreRate,setCoreRate] = useState()

  //index
  const [rate,setRate] = useState(null)

  //global index
  //loading transaction
  const [isLoading,setLoading] = useState(false)
  const [loadingMessage,setLoadingMessage] = useState('')


  //hook for connecting to wallet status
  //value can be 'unkown' 'connecting' 'connected'  
  //const connectionStatus = useConnectionStatus()

  //index
  const address = useAddress()

  //index  
  const { contract:contractToken, isLoading:isContractTokenLoading , error:contractTokenError, isSuccess:isSuccessToken } = useContract(tokenAddress)
  
  //index
  const { contract:contractCrowdsale, isLoading:isContractCrowdsaleLoading , error:contractCrowdsaleError, isSuccess: isSuccessCrowdsale } = useContract(crowdsaleAddress)


  //index
  ///connect to usdt contract ////////////////
  const [tetherContract, setUsdtContract] = useState(null)
  const [tetherLoading, setTetherLoading] = useState(false)

  const connectToTetherContract = async () => {
    try{
      setTetherLoading(true)
      //must connect to methamask before calling this
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()

      const contract = new ethers.Contract(
        tetherAddress,//contractAddress.Token,
        tetherAbi,
        signer//provider
      )
      setUsdtContract({
        contract:contract,
        signer: signer
      })

      setTetherLoading(false)
    } catch (e){
      console.log('StateContext: error to connect to usdt contract raw', e)
    }
  }
  

  useEffect(()=>{
    if(address){
      connectToTetherContract()
    }
  },[address])
  ///////////end connect to usdt contract /////////////
   
 //index 
//fetch core price
const fetchCorePrice = () => {
  cc.price('BNB','USD')
  .then(price => setCoreRate(price.USD))
  .catch(()=>console.log("can't fetch core price"))
}
useEffect(()=>{
  fetchCorePrice()
},[])

//end fetch core price

//index
  const getTokenName = async () => {
    const name = await contractToken.call('name');
    return name
  }

  const getTokenSymbol = async () => {
    const symbol = await contractToken.call('symbol');
    return symbol;
  }

  const getTokenTotalSupply = async () => {
    let totalSupply = await contractToken.call('totalSupply');
    totalSupply= ethers.utils.formatEther(totalSupply)
    return totalSupply;
  }

  /*
  const getBalanceOf = async (address) => {
    const balance = await contractToken.call('balanceOf',[address])
    console.log(balance.toString())
    return balance.toString()
  }
*/

  
  
  //index
  const { data:_usdRate, isLoading:usdRateLoading, error: usdRateError } = useContractRead(contractCrowdsale, 'getRate')
  useEffect(()=>{
    if(_usdRate !== undefined){
      setRate(Number(_usdRate))
    }
  },[_usdRate])

//index
//set token data
const getTokenData = async () => {
  const name = await getTokenName()
  const symbol = await getTokenSymbol()
  const totalSupply = await getTokenTotalSupply()

  setToken({    
      name:name,
      symbol:symbol,
      totalSupply:totalSupply
  })
}
useEffect(()=>{
  if(isSuccessToken){getTokenData()}
},[address,isSuccessToken])





  
  //////////////////////////////////////////////////////////////////////////////////////////
  ///all for crowdsale


  //two method to get 
  const { data:preIcoData, isLoading:getCorwdsaleLoading, error , } = useContractRead(contractCrowdsale, 'getCrowdsaleStage');
  useEffect(()=>{
    if(preIcoData !== undefined){
      //setPreIco(Boolean(Number(preIcoData.toString())))
      setPreIco(Number(preIcoData.toString()))
    }
    console.log(preIco, "pre ico")
  },[preIcoData])

  //call this first
  /*const [isPreIcoFetched, setPreIcoFetched] = useState(false)
  const getCrowdsaleStage = async () => {
    const data = await contractCrowdsale.call('getCrowdsaleStage')
    return Boolean(Number(data.toString()))
  }

  useEffect(()=>{},[contractCrowdsale])*/

  //get contract crowdsale fund raised
  const { data:getFundsRaised, isLoading:getFundsRaisedLoading, error:getFundsRaisedError } = useContractRead(contractCrowdsale, 'getFundsRaised');
  const [fundsRaised,setFundsRaised] = useState(0)
  const _setFundsRaised = () => {
    setFundsRaised(ethers.utils.formatUnits(getFundsRaised,'mwei').toString())
  }

  useEffect(()=>{
    if(getFundsRaised){
      _setFundsRaised()
    }
  },[getFundsRaised])
  //END get contract crowdsale fund raised

  //get contract crowdsale usdt raised
  const { data:getUsdtRaised, isLoading:getUsdtRaisedLoading, error:getUsdtRaisedError } = useContractRead(contractCrowdsale, 'getUsdtRaised');
  const [usdtRaised,setUsdtRaised] = useState(0)
  const _setUsdtRaised = () => {
    setUsdtRaised(ethers.utils.formatUnits(getUsdtRaised,'mwei').toString())
  }

  useEffect(()=>{
    if(getUsdtRaised){
      _setUsdtRaised()
    }
  },[getUsdtRaised])
  //END get contract crowdsale usdt raised
  
  //get contract crowdsale wei raised
  const { data:getWeiRaised, isLoading:getWeiRaisedLoading, error:getWeiRaisedError } = useContractRead(contractCrowdsale, 'getWeiRaised');
  const [weiRaised,setWeiRaised] = useState(0)
  const _setWeiRaised = () => {
    setWeiRaised(ethers.utils.formatUnits(getWeiRaised,18).toString())
  }

  useEffect(()=>{
    if(getWeiRaised){
      _setWeiRaised()
    }
  },[getWeiRaised])
  //END get contract crowdsale wei raised

  //getTokenSold

  //get contract crowdsale token sold
  const { data:getTokenSold, isLoading:getTokenSoldLoading, error:getTokenSoldError } = useContractRead(contractCrowdsale, 'getTokenSold');
  const [tokenSold,setTokenSold] = useState(0)
  const _setTokenSold = () => {
    setTokenSold(ethers.utils.formatUnits(getTokenSold,18).toString())
  }

  useEffect(()=>{
    if(getTokenSold){
      _setTokenSold()
    }
  },[getTokenSold])
  //END get contract crowdsale token sold

  //get contract crowdsale investor target cap
  const { data:getInvestorTargetCap, isLoading:getInvestorTargetCapLoading, error:getInvestorTargetCapError } = useContractRead(contractCrowdsale, 'getInvestorTargetCap');
  const [investorTargetCap,setInvestorTargetCap] = useState(0)
  const _setInvestorTargetCap = () => {
    setInvestorTargetCap(ethers.utils.formatUnits(getInvestorTargetCap,usdtDecimal).toString())
  }

  useEffect(()=>{
    if(getInvestorTargetCap){
      _setInvestorTargetCap()
    }
  },[getInvestorTargetCap])
  //END get contract crowdsale investor target cap


  //get contract crowdsale wei raised
  const { data:getTimeCrowdsale, isLoading:getTimeCrowdsaleLoading, error:getTimeCrowdsaleError } = useContractRead(contractCrowdsale, 'getTimeCrowdsale');
  const [timeCrowdsale,setTimeCrowdsale] = useState(0)
  const _setTimeCrowdsale = () => {
    setTimeCrowdsale(getTimeCrowdsale.toString())
  }

  useEffect(()=>{
    if(getTimeCrowdsale){
      _setTimeCrowdsale()
    }
  },[getTimeCrowdsale])
  //END get contract crowdsale wei raised


  //get contract crowdsale wei raised
  const { data:_crowdsaleTokenBalance, isLoading:crowdsaleTokenBalanceLoading, error:crowdsaleTokenBalanceError } = useContractRead(contractCrowdsale, 'crowdsaleTokenBalance');
  const [crowdsaleTokenBalance,setCrowdsaleTokenBalance] = useState(0)
  const _setCrowdsaleTokenBalance = () => {
    setCrowdsaleTokenBalance(ethers.utils.formatUnits(_crowdsaleTokenBalance,18).toString())
  }

  useEffect(()=>{
    if(_crowdsaleTokenBalance){
      _setCrowdsaleTokenBalance()
    }
  },[_crowdsaleTokenBalance])
  //END get contract crowdsale wei raised
 

  return (
    <StateContext.Provider
      value={{
        address,
        tetherContract, 
        contractToken,
        contractCrowdsale,
        preIco,
        token,
        coreRate,
        rate,
        fundsRaised,
        usdtRaised,
        weiRaised,
        investorTargetCap,
        timeCrowdsale,
        tokenSold,
        crowdsaleTokenBalance,
      }}
    >
      { (isContractTokenLoading  
            && isContractCrowdsaleLoading 
            && preIcoData === undefined
            && token.length === 0)
        ? <SplashScreen/>
        : children
      }
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);

///prim: #0B5E8F
// sec: #05A76C
//third: #7BBB03
// one : 