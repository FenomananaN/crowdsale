import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'


import { ReactComponent as Telegram } from '../assets/icon/icons8-telegram-100.svg'
import { ReactComponent as Twitter } from '../assets/icon/icons8-twitterx-100.svg'

export const Community = ({id}) => {
  return (
    <Container id={id} sx={{
        my:6,
    }}>
        <Box sx={{
            p:3,
            border: '2px solid #0B5E8F'
        }}>
            <Typography variant='h6' align='center' sx={{color: '#0B5E8F', fontWeight: 'bold'}}>COMMUNITY</Typography>
            <Typography align='center' sx={{fontSize: 18, my:2}}>
                Join the TATA community, where creative minds come together to share memes, jokes, and hilarious moments related to the crypto world. Our Discord and social media platforms are places of exchange where members participate in fun contests, organize virtual events, and celebrate the joyous madness of TATA Coin.
            </Typography>
            <Typography align='center' sx={{fontSize: 18, mb:2}}>
                TATA Coin is not just a digital currency; it's a daily celebration of laughter and camaraderie in the world of cryptocurrency. Get ready to be dazzled by the comedic brilliance of TATA Coin!
            </Typography>
            <Stack direction={'row'} justifyContent={'center'}>
                <Telegram width={50} height={50}/>
                <Twitter width={50} height={50}/>
            </Stack>
        </Box>
    </Container>
  )
}
