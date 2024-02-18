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
            <Typography variant='h6' align='center' sx={{fontWeight: 'bold', mt:2}}>Join the Bitjoy Airdrop: Be Part of the Action!</Typography>
            <Typography align='center' sx={{fontSize: 18, my:2}}>Are you ready for exciting rewards and opportunities? Dive into a unique crypto experience by joining our Bitjoy Airdrop today!</Typography>
            <Typography variant='h6' align='center' fontWeight={'bold'}>🚀 How to Participate?</Typography>
            <Typography align='center' sx={{fontSize: 18}} py={1}>It's simple! Visit our official website and sign up for the Airdrop in just a few clicks.</Typography>
            
            <Typography variant='h6' align='center' fontWeight={'bold'}>💰 Exclusive Rewards</Typography>
            <Typography align='center' sx={{fontSize: 18}} py={1}>By participating, you can earn Bitjoy Points, our very own digital currency, redeemable for amazing prizes like $BNB or $BITJOY tokens. The more you participate, the greater your chances of winning!</Typography>
            
            <Typography variant='h6' align='center' fontWeight={'bold'}>🎁 Referral Bonus</Typography>
            <Typography align='center' sx={{fontSize: 18}} py={1}>Invite your friends to join and earn even more rewards! Each new member you refer earns you additional points.</Typography>
            
            <Typography align='center' sx={{fontSize: 18}} py={1}>Don't miss out on this opportunity to join a vibrant community, earn exclusive rewards, and embark on an exciting</Typography>

            <Box sx={{display:'flex' , justifyContent:'center', my:2}}>
              <Button variant='contained' color='main' href='https://t.me/BitjoyTestButtons_bot?start=Bot11487633' target='_blank' rel='noopener noreferrer'>Join the Airdrop Now!</Button>
            </Box>
            <Typography align='center' sx={{fontSize: 18}} py={1}>Stay tuned for more updates and exciting announcements!</Typography>
            
        </Box>
    </Container>
  )
}
/*

 */