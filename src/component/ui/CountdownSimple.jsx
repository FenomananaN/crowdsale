import React ,{useState,useEffect} from 'react'
import { Box, Button, Typography, Stack } from '@mui/material'
import Countdown from 'react-countdown'


const colorFront = '#FFD700'


export const CountdownSimple = ({countdownTarget,setClaim}) => {
	//new Date(countdownTarget).getTime(

	return(
		<Countdown date={new Date(countdownTarget).getTime()} 
         renderer={(props) => renderer(props)}/>)
}


const renderer = ({ days,hours, minutes, seconds, completed}) => {

    if (completed) {
      // Render a completed state
	  return <Typography>Reload Page</Typography>
    } else {
      // Render a countdown
      return <CountdownRender days={days} hours={hours} minutes={minutes} seconds={seconds}/>
    }
  }

  const CountdownRender = ({days,hours,minutes,seconds}) =>{
	return (
        <Box sx={{
            display:'flex',
            border: `1px solid ${colorFront}`,
            borderRadius: 1,
            width: 'fit-content',
            p:1,
            m:1,
            backgroundColor: '#ffffff11'
        }}>
			<Typography color={colorFront}>{showTwoDigit(days)}:{showTwoDigit(hours)}:{showTwoDigit(minutes)}:{showTwoDigit(seconds)}</Typography>
        </Box>)
  }

  const showTwoDigit = (value) => {
	return value>9 ? value : '0'+value
  }