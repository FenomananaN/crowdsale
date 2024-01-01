import React, { useState } from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
//import useScrollTrigger from '@mui/material/useScrollTrigger'


import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import AdbIcon from '@mui/icons-material/Adb'
import { Drawer, List, ListItem } from '@mui/material'
import { Link } from 'react-scroll'

import tataLogo from '../assets/image/tata-logo.png'
import tata from '../assets/image/tata.webp'

import { ReactComponent as Telegram } from '../assets/icon/icons8-telegram-100.svg'
import { ReactComponent as Twitter } from '../assets/icon/icons8-twitterx-100.svg'
import { ConnectWalletButton } from './smartContract/ConnectWallet'


const pages = [
    {title:'Home', offset: 0},
    {title:'About', offset: -80},
    {title:'Presale', offset: -80},
    {title:'Community', offset: -80},
    {title:'Tokenomics', offset: 50},
    {title:'FAQ', offset: 50},
]

export const Header = () => {

    const [anchorElNav, setAnchorElNav] = useState(false)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(true);
    }

    
    const handleCloseNavMenu = () => {
        setAnchorElNav(false);
    }


    /*const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window : undefined,     ///#282C34
    })*/
    
  return (
        <AppBar sx={{backgroundColor:'#282c34'}} elevation={0}>
          <Container >
            <Toolbar disableGutters>
                <Box
                component={'img'}
                alt='logo'
                src={tataLogo}
                width={50}
                height={50}
                sx={{
                    display: { xs: 'none', md: 'flex' },
                }}
                />
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                    mx: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.5rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    TATA
                </Typography>

                {/* START MOBILE VIEW */}
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                    </IconButton>
                    
                    <Drawer
                        open={anchorElNav}
                        onClose={handleCloseNavMenu}
                        PaperProps={{
                            elevation:0,
                            sx:{
                                mt:6,
                                ml:4,
                                width:200,
                                height: 'fit-content',
                                backgroundColor: '#0B5E8F'
                            }
                        }}
                        >
                         <Box sx={{
                            display:'flex',
                            justifyContent:'center'
                         }}>
                            <List sx={{
                                mx:4,
                                display:'flex',
                                flexDirection: 'column',
                                alignItems:'center'
                            }}>
                            {pages.map((page) => (
                                <Link
                                    key={page.title}
                                    to={page.title}
                                    onClick={handleCloseNavMenu}
                                    style={{ my: 2, color: 'white', display: 'block' }}
                                    spy={true} smooth={true} offset={page.offset} duration={500}
                                >
                                    <Typography >{page.title.toUpperCase()}</Typography>
                                </Link>
                                ))
                            }
                            </List>
                         </Box>
                    </Drawer>
                </Box>

                <Box
                component={'img'}
                alt='logo'
                src={tataLogo}
                width={30}
                height={30}
                sx={{
                    display: { xs: 'flex', md: 'none' },
                }}
                />

                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    sx={{
                    mx: 2,
                    display: { xs: 'flex', md: 'none' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.5rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    TATA
                </Typography>
                {/* END MOBILE VIEW */}

                {/* START LARGE VIEW */}

                <Box sx={{ flexGrow: 1 }}>
            
                </Box>
                <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                    <Link
                        key={page.title}
                        onClick={handleCloseNavMenu}
                        style={{ my: 2, color: 'white', display: 'block' }}
                        to={page.title}
                        spy={true} smooth={true} offset={page.offset} duration={500}
                    >
                        <Typography variant='h6' sx={{
                            mx:1, 
                            fontSize: 18,
                            //fontFamily: 'monospace',
                            fontWeight: 200,
                            //letterSpacing: '.3rem',
                            color: 'inherit',
                    }}>{page.title.toUpperCase()}</Typography>
                    </Link>
                    ))}
                </Box>
                <IconButton sx={{ml:6, display: { xs: 'none', md: 'flex' }}}>
                    <Telegram width={40} height={40}/>
                </IconButton>
                <IconButton sx={{display: { xs: 'none', md: 'flex' }}}>
                    <Twitter width={40} height={40}/>
                </IconButton>
                <Box>
                    <ConnectWalletButton/>
                </Box>
                {/* END LARGE VIEW */}
            </Toolbar>
        </Container>
        </AppBar>
  )
}
