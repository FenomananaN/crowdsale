import React from 'react'
import { Box, Typography } from '@mui/material'
import Countdown from 'react-countdown'
import { useRef } from 'react'


const colorFront = '#FFD700'


export const CountdownSimple = ({countdownTarget,setClaim}) => {
	//new Date(countdownTarget).getTime(
	const countdownRef = useRef(null)

	const handleOnComplete = () => {
		setClaim(true)
	}

	return(
		<Countdown ref={countdownRef} date={new Date(countdownTarget).getTime()} 
          onComplete={handleOnComplete}
         renderer={renderer}/>)
}

const TimeShow = ({label,value}) => {
	return (
		<Box sx={{
			display: 'flex',
			flexDirection: 'column',
			alignItems:'center',
			width: 'fit-content',
		}}>
			<Typography sx={{
				color: colorFront,
				fontSize: 30,
				p:1
			}}>
				{value>9 ? value : '0'+value}
			</Typography>

			<Typography sx={{
				color: colorFront,
				fontSize: 12,
				position: 'relative',
				top:-16,
			}}>
				{label}
			</Typography>
		</Box>
	)
}

const renderer = ({ days,hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return (
	  <Box sx={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
	  <CountdownRender days={0} hours={0} minutes={0} seconds={0}/>
	  </Box>)
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
            borderRadius: 5,
            width: 'fit-content',
            p:1,
            m:1,
            backgroundColor: '#ffffff11'
        }}>
            <TimeShow label='Days' value={days}/>
            <Typography mt={2} sx={{color: colorFront}}>:</Typography>
            <TimeShow label='Heures' value={hours}/>
            <Typography mt={2} sx={{color: colorFront}}>:</Typography>
            <TimeShow label='Minutes' value={minutes}/>
            <Typography mt={2} sx={{color: colorFront}}>:</Typography>
            <TimeShow label='Seconds' value={seconds}/>
        </Box>)
  }