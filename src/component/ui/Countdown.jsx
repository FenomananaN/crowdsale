import React ,{useState,useEffect} from 'react'
import { Box, Button, Typography, Stack } from '@mui/material'

const COUNTDOWN_TARGET = new Date("2023-12-20").getTime()

const TimeShow = ({label,value}) => {
	return (
		<Box sx={{
			display: 'flex',
			flexDirection: 'column',
			alignItems:'center',
			width: 'fit-content',
		}}>
			<Typography sx={{
				fontSize: 30,
				p:1
			}}>
				{value>9 ? value : '0'+value}
			</Typography>

			<Typography sx={{
				fontSize: 12,
				position: 'relative',
				top:-16,
			}}>
				{label}
			</Typography>
		</Box>
	)
}

const getTimeLeft = () => {

	const totalTimeLeft = COUNTDOWN_TARGET-new Date().getTime();
	const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
	const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
	const seconds = Math.floor((totalTimeLeft / 1000) % 60);
	return { days, hours, minutes, seconds }
}

export const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(getTimeLeft());
		}, 1000);
		return () => {
			clearInterval(timer);
		};
		
	}, [timeLeft])


  return (
    <Box sx={{
		display:'flex',
		border: '1px solid black',
		borderRadius: 5,
		width: 'fit-content',
		p:1,
		m:1
	}}>
		<TimeShow label='Days' value={timeLeft.days}/>
		<Typography mt={2}>:</Typography>
		<TimeShow label='Heures' value={timeLeft.days}/>
		<Typography mt={2}>:</Typography>
		<TimeShow label='Minutes' value={timeLeft.minutes}/>
		<Typography mt={2}>:</Typography>
		<TimeShow label='Seconds' value={timeLeft.seconds}/>
	</Box>
  )
}
