import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { Telegram, Twitter } from '../component'

export const Community = ({id}) => {
  return (
    <Container id={id} sx={{
        my:6,
    }}>
        <Box sx={{
            p:3,
            border: '2px solid #0B5E8F'
        }}>
            <Typography variant='h5' align='center' sx={{color: '#0B5E8F', fontWeight: 'bold'}}>COMMUNITY</Typography>
            <Typography variant='h6' align='center' sx={{fontWeight: 'bold', mt:2}}>Join the Smile Revolution with Bitcoin Crash Smiles! 😄🚀</Typography>
            <Typography align='center' sx={{fontSize: 18, my:2}}>
            Hello to all crypto enthusiasts, market explorers, and laughter lovers!
            </Typography>
            <Typography align='center' sx={{fontSize: 18, mb:2}}>
            Are you searching for a space where market crashes turn into opportunities for smiles, and crypto camaraderie reigns supreme? Welcome to Bitcoin Crash Smiles! – the community where every dip is a chance for a radiant grin.
            </Typography>
            <Typography variant='h6' align='center' fontWeight={'bold'}>
            🌟Why Join Us?
            </Typography>

            <Typography align='center' sx={{fontSize: 18}} py={1}>
            Crypto Positivity: We turn market fluctuations into moments of laughter and good vibes. Together, we navigate through the highs and lows with optimism.
            </Typography>

            <Typography align='center' sx={{fontSize: 18}} py={1}>
            Laugh-Inducing Memes: Dive into an ocean of hilarious crypto-related memes. Our community is fueled by laughter, jokes, and constant fun.
            </Typography>

            <Typography  align='center' sx={{fontSize: 18}} py={1}>
            Experience Sharing: Whether you're a trading expert or a curious beginner, share your experiences, ask questions, and learn in a relaxed and friendly atmosphere.
            </Typography>

            <Typography  align='center' sx={{fontSize: 18}} py={1}>
            Special Events: Get ready to participate in exclusive events, win rewards, and celebrate community achievements together.
            </Typography>

            <Typography variant='h6' align='center' fontWeight={'bold'}>
            🚀 How to Join Us:
            </Typography>

            <Typography align='center' sx={{fontSize: 18}} py={1}>
            It's simple! Follow us on our social media, engage in discussions on our forums, and use the hashtag #BitcoinCrashSmiles to share your joyful moments in the crypto world.
            </Typography>

            <Typography variant='h6' align='center' fontWeight={'bold'}>
            💬 Join Us, Smile with Us!
            </Typography>

            <Typography align='center'  sx={{fontSize: 18}} py={1}>
            Whether you're here for the memes, for enlightening discussions, or just to be part of a positive community, you're welcome. Together, we're building a unique crypto experience, full of smiles and camaraderie.
            </Typography>

            <Typography  align='center'  sx={{fontSize: 18}} py={1}>
            Join the Smile Revolution – Bitcoin Crash Smiles! 🚀😄
            </Typography>

            <Stack direction={'row'} justifyContent={'center'}>
                <Telegram width={50} height={50}/>
                <Twitter width={50} height={50}/>
            </Stack>
        </Box>
    </Container>
  )
}
