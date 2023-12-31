import { useAddress, useBalance, useConnectionStatus, useContract, useContractRead, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import React, { useContext, createContext, useEffect, useState } from 'react'
import { Loading, SplashScreen } from '../component'
import { crowdsaleAbi, crowdsaleAddress, tetherAbi, tetherAddress, tokenAbi, tokenAddress } from '../contract';

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
  cc.price('CORE','USD')
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
    const totalSupply = await contractToken.call('totalSupply');
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
  console.log(name,symbol,ethers.utils.formatEther(totalSupply))
  setToken({    
      name:name,
      symbol:symbol
  })
}
useEffect(()=>{
  if(isSuccessToken){getTokenData()}
},[address,isSuccessToken])





  
  //////////////////////////////////////////////////////////////////////////////////////////
  ///all for crowdsale

//index
  //two method to get 
  const { data:preIcoData, isLoading:getCorwdsaleLoading, error , } = useContractRead(contractCrowdsale, 'getCrowdsaleStage');
  useEffect(()=>{
    if(preIcoData !== undefined){
      setPreIco(Boolean(Number(preIcoData.toString())))
    }
    console.log(preIco, "pre ico")
  },[preIcoData])

  //call this first
  const [isPreIcoFetched, setPreIcoFetched] = useState(false)
  const getCrowdsaleStage = async () => {
    const data = await contractCrowdsale.call('getCrowdsaleStage')
    return Boolean(Number(data.toString()))
  }

  useEffect(()=>{},[contractCrowdsale])
 

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