import React ,{useState,useEffect} from 'react'
import { Box, Button, Typography, Stack } from '@mui/material'

//Date(year,month,day,hours,minutes,seconds)
//const COUNTDOWN_TARGET = new Date(2023,12,30,21,25,0)
const colorFront = '#05A76C'


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

const getTimeLeft = (countdownTarget) => {

	const totalTimeLeft = new Date(countdownTarget).getTime()-new Date().getTime();
	const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
	const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
	const seconds = Math.floor((totalTimeLeft / 1000) % 60);
	return { days, hours, minutes, seconds }
}

export const Countdown = ({countdownTarget}) => {

    const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(countdownTarget))
	

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(getTimeLeft(countdownTarget));
		}, 1000);
		return () => {
			clearInterval(timer);
		};
		
	}, [timeLeft])


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
		<TimeShow label='Days' value={timeLeft.days}/>
		<Typography mt={2} sx={{color: colorFront}}>:</Typography>
		<TimeShow label='Heures' value={timeLeft.days}/>
		<Typography mt={2} sx={{color: colorFront}}>:</Typography>
		<TimeShow label='Minutes' value={timeLeft.minutes}/>
		<Typography mt={2} sx={{color: colorFront}}>:</Typography>
		<TimeShow label='Seconds' value={timeLeft.seconds}/>
	</Box>
  )
}
