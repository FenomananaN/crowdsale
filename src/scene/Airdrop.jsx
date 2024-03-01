import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { Telegram, Twitter } from '../component'

export const Airdrop = ({id}) => {
  return (
    <Container id={id} sx={{
        my:6,
    }}>
        <Box sx={{
            p:3,
            border: '2px solid #C2992D'
        }}>
            <Typography variant='h5' align='center' sx={{color: '#C2992D', fontWeight: 'bold'}}>AIRDROP</Typography>
            <Typography variant='h6' align='center' sx={{fontWeight: 'bold', mt:2}}>🎉 Join BitJoy's Airdrop! 🚀</Typography>
            <Typography align='center' sx={{fontSize: 18, my:2}}>🌟 Ready for an adventure? BitJoy invites you to join our Telegram community and earn rewards daily!</Typography>
            <Typography variant='h6' align='center' fontWeight={'bold'}>💰 Participate in our airdrop</Typography>
            <Typography align='center' sx={{fontSize: 18}} py={1}>Under 1000 members: Get 20 BITJOY/day.
              Over 1000 members: Rewards increase!
              Surpass 100,000 members: Earn up to 100 BITJOY/day!</Typography>
            
            <Typography align='center' sx={{fontSize: 18}} py={1}>🤖 Claim rewards via our Telegram bot once you're in!</Typography>
            

            <Box sx={{display:'flex' , justifyContent:'center', my:2}}>
              <Button variant='contained' color='main' href='https://t.me/BitjoyAirdrop_Bot' target='_blank' rel='noopener noreferrer'>Join the Airdrop Now!</Button>
            </Box>
            <Typography align='center' sx={{fontSize: 18}} py={1}>📢 Invite friends & let's grow together!</Typography>
            
            <Typography align='center' sx={{fontSize: 18}} py={1}>Don't miss out on this opportunity. Join BitJoy today and start earning!</Typography>
        </Box>
    </Container>
  )
}
/*

 */