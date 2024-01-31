import { Box, Button, Dialog, DialogContent, DialogTitle, Stack } from '@mui/material'
import React, { useState } from 'react'
import { DatePicker, TimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useAdminContext } from '../../context';
import { CardTime } from './CardTime';
import { useAddress } from '@thirdweb-dev/react';
import dayjs from 'dayjs';

export const ShowTime = ({round,time}) => {
    const [open,setOpen] = useState(false)
    console.log('time',time)

  return (
    <>
    <DialogChange open={open} setOpen={setOpen} round={round}/>
    <CardTime setOpen={setOpen} round={round} time={time}/>
    </>
  )
}

const DialogChange = ({open,setOpen, round}) => {

    const {setTimeCrowdsale} = useAdminContext()
    const address = useAddress()
    const [dateCrowdsale,setDateCrowdsale] = useState('')
    const [timeCr,setTimeCr]= useState('')

    const handleTimeCrowdsale =async () => {
        if(!address){
           // setOpen(true)
        } else {

            if(dateCrowdsale !== null && timeCr !== null){
                const newTime= dayjs(dateCrowdsale.format('YYYY-MM-DD')+' '+timeCr.format('HH:mm:ss'))
                console.log(newTime.toString())
                console.log(newTime.format('YYYY-MM-DD HH:mm:ss'))
                console.log(newTime.unix())

                await setTimeCrowdsale(newTime.unix().toString(), round)
            }

            else{
                alert('can t be null')
            }
        }
    }
    return (

    
      <Dialog
        open={open}
        //TransitionComponent={Transition}
        //keepMounted
        onClose={()=>{setOpen(false)}}
      >
        <DialogTitle>{`Change time for Round ${round}` }</DialogTitle>
        <DialogContent>

        <Stack spacing={1} display={'flex'} flexDirection={'column'} sx={{width:'fit-content'}}>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker value={dateCrowdsale} onChange={(newValue) => setDateCrowdsale(newValue)} />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker value={timeCr} onChange={(newValue) => setTimeCr(newValue)} />
            </LocalizationProvider>

            <Button variant='contained' onClick={handleTimeCrowdsale}>Set</Button>
        </Stack>
        </DialogContent>
      </Dialog>
    )
}