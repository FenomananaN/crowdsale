import { Box, Container, List, ListItem, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'
import TokenomicsTokenShare from '../assets/image/tokenomics.png'
import { ChartLabel, CopyToClipboard } from '../component'
import { Link } from 'react-router-dom'
import { tokenAddress } from '../contract'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { useTruncateString } from '../utils'

export const Tokenomics = ({id}) => {
  return (
    <Container id={id} sx={{py:3}}>

        <Paper sx={{ p:{xs:1,md:3}/*, backgroundColor: '#282C34'*/}} elevation={1}>
            <Typography variant='h4' align='center' sx={{color: '#C2992D', fontWeight: 'bold', mb:2}}>TOKENOMICS</Typography>

            <Typography variant='h6'>TOTAL SUPPLY = <span style={{color:'#C2992D', fontWeight:'bold' }}>21,000,000,000 BITJOY</span></Typography>

            <List sx={{ listStyle: "none", pl: {xs:0,md:4} ,}}>
                    {/*['& li.MuiListItem-root::marker']:{
                        fontWeight:600
                    } }}>  use listStyle: "lower-alpha" for a b c*/}
                <ListItem sx={{ display: "list-item" }} >
                    <ListItemText primary="Distribution:" primaryTypographyProps={{ fontWeight: 800}}/>
                    {/* 2em method <ListItemText disableTypography primary={<Typography .....}  */}
                    <List disablePadding>
                        <ListItem disablePadding>
                            <ListItemText primary={"- 60% allocated to the Crowdsale"}/>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary={"- 40% reserved for Liquidity (20% for each DEX&CEX)"}/>
                        </ListItem>
                    </List> 
                </ListItem>

                <ListItem sx={{ display: "list-item" }} >
                    <ListItemText disableTypography primary={
                        <Box sx={{display:'flex',flexDirection:{xs:'column',md:'row'}, alignItems:{xs:'start',md:'center'}}}>

                            <Typography sx={{fontWeight: 800,mr:2}}>
                                Token contract address:
                            </Typography>
                            <Box display={'flex'} alignItems={'center'}>
                                <Typography sx={{display:{xs:'none',sm:'flex'}}}>
                                    {tokenAddress}
                                </Typography>
                                <Typography sx={{fontWeight: 800,display:{xs:'flex',sm:'none'}}}>
                                    {useTruncateString(tokenAddress,29)} 
                                </Typography>
                            <CopyToClipboard text={tokenAddress}/>
                            </Box>
                        </Box>}
                        secondary={
                            <Box sx={{display:'flex', alignItems:'center'}}>

                                <Typography mr={1}>Check on 
                                </Typography>
                                    <Box component={'a'} href={`https://scan.coredao.org/address/${tokenAddress}`} target='_blank' rel='noopener noreferrer'
                                        sx={{
                                            //textDecoration: 'none',
                                            display: 'flex',
                                            alignItems:'center',
                                            letterSpacing:1,
                                            wordSpacing:-7
                                        }}>
                                    bsc scan
                                    <ExitToAppIcon style={{fontSize: 15, marginLeft:3}}/>
                                    </Box>
                            </Box>
                        }/>
                </ListItem>

                <ListItem sx={{ display: "list-item" }} >
                    <ListItemText primary="Key features:" primaryTypographyProps={{ fontWeight: 800}}/>
                    <List disablePadding>
                        <ListItem disablePadding>
                            <ListItemText primary="- No unnecessary details"/>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary=" - No additional taxes; BITJOY is designed as memecoin for pure enjoyment"/>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary="- The LP token will be burned, and ownership of the contract will be renounced."/>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary="- BITJOY is inclusive; designed to bring smiles and joy to everyone."/>
                        </ListItem>
                    </List>
                </ListItem>

               {/* <ListItem sx={{ display: "list-item" }} disablePadding>
                    <ListItemText primary="Use of Public Sale Funds:" primaryTypographyProps={{ fontWeight: 800}}/>
                    <List disablePadding>
                        <ListItem disablePadding>
                            <ListItemText primary="- 15% for project development, including technology, security, and ongoing improvement"/>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary=" - 15% for marketing and promotion to expand the BITJOY community and awareness."/>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary="- 10% for reserves and financial security of the project."/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="- 40% reinvested into the community for special events, rewards, and incentives to encourage active participation"/>
                        </ListItem>
                    </List>
                </ListItem>
                 */}

               {/*
                <ListItem sx={{ display: "list-item" }} disablePadding>
                    <ListItemText primary="Liquidity:" primaryTypographyProps={{ fontWeight: 800}} />
                    <List disablePadding>
                        <ListItem disablePadding>
                            <ListItemText primary="- Funds allocated to liquidity will be used to create liquidity pairs on decentralized trading platforms, ensuring stability and ease of exchange for BITJOY holders"/>
                        </ListItem>
                    </List>
                </ListItem>
                 */}
            </List>
        </Paper>
    </Container>
  )
}
