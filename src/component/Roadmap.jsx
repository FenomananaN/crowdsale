import { Box, Chip, Container, Dialog, DialogContent, DialogTitle, Divider, IconButton, List, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { VerticalDivider } from './utils/VerticalDivider'


export const Roadmap = ({open,setOpen}) => {
  return (
    <Dialog onClose={()=>setOpen(false)} open={open?open:false} fullScreen >
        <DialogTitle align='center' sx={{color: '#C2992D', fontWeight: 'bold'}}>ROADMAP</DialogTitle>
        <DialogContent>
            <Container sx={{mb:6}}>
                <IconButton sx={{position:'absolute', right: 3, top:3}} onClick={()=>setOpen(false)}>
                    <CloseIcon/>
                </IconButton>
                <VerticalDivider title={'PHASE 1 - Epic Launch'}>
                    <List>
                        <ListItem sx={{ display: "list-item" }} disablePadding>
                            <ListItemText primary="Build a Website and Social Network for Bitjoy" primaryTypographyProps={{fontWeight:'bold'}}/>
                            <List disablePadding>
                                <ListItem >
                                    <ListItemText primary="● Create a comprehensive website and establish an active presence on social media to build a solid foundation."/>
                                </ListItem>
                            </List>
                        </ListItem>
                        <ListItem sx={{ display: "list-item" }} disablePadding>
                            <ListItemText primary="Launch on Pancakeswap" primaryTypographyProps={{fontWeight:'bold'}}/>
                            <List disablePadding>
                                <ListItem>
                                    <ListItemText primary="● Official launch on Pancakeswap to provide easy access to our growing community"/>
                                </ListItem>
                            </List>
                        </ListItem>

                        <ListItem sx={{ display: "list-item" }} disablePadding>
                            <ListItemText primary="Listing on CMC & CG" primaryTypographyProps={{fontWeight:'bold'}}/>
                            <List disablePadding>
                                <ListItem>
                                    <ListItemText primary="● Inclusion on CoinMarketCap (CMC) and CoinGecko (CG) for increased visibility."/>
                                </ListItem>
                            </List>
                        </ListItem>


                        <ListItem sx={{ display: "list-item" }} disablePadding>
                            <ListItemText primary="Trading on DEX/CMC/CG" primaryTypographyProps={{fontWeight:'bold'}}/>
                            <List disablePadding>
                                <ListItem>
                                    <ListItemText primary="● Commence trading on major decentralized platforms (DEX) and on CoinMarketCap and CoinGecko"/>
                                </ListItem>
                            </List>
                        </ListItem>

                        <ListItem sx={{ display: "list-item" }} disablePadding>
                            <ListItemText primary="Listing on CEX" primaryTypographyProps={{fontWeight:'bold'}}/>
                            <List disablePadding>
                                <ListItem>
                                    <ListItemText primary="● Expand to centralized exchanges (CEX) to enhance accessibility."/>
                                </ListItem>
                            </List>
                        </ListItem>


                        <ListItem sx={{ display: "list-item" }} disablePadding>
                            <ListItemText primary="Trading on CEX" primaryTypographyProps={{fontWeight:'bold'}}/>
                            <List disablePadding>
                                <ListItem>
                                    <ListItemText primary="● Activate trading on centralized exchanges."/>
                                </ListItem>
                            </List>
                        </ListItem>

                    </List>
                </VerticalDivider>
                <VerticalDivider title={"Phase 2 - Emerging Leaders"}>
                        <List>
                        <ListItem sx={{ display: "list-item" }} disablePadding>
                            <ListItemText primary="Top Holder" primaryTypographyProps={{fontWeight:'bold'}}/>
                            <List disablePadding>
                                <ListItem>
                                    <ListItemText primary="● Highlight and recognize the most significant holders of Bitcoin Smiles!."/>
                                </ListItem>
                            </List>
                        </ListItem>
                        </List>
                </VerticalDivider>

                <VerticalDivider title={"Phase 3 - Gratitude for Shared Joy"}>
                    <List>
                        <ListItem sx={{ display: "list-item" }} disablePadding>
                            <ListItemText primary="Thanks for Joying" primaryTypographyProps={{fontWeight:'bold'}}/>
                            <List disablePadding>
                                <ListItem>
                                    <ListItemText primary="● Celebrate and acknowledge the community for its participation and positivity."/>
                                </ListItem>
                            </List>
                        </ListItem>
                    </List>
                </VerticalDivider>
            </Container>
      </DialogContent>
    </Dialog>

  )
}

/**
 <ListItem sx={{ display: "list-item" }} disablePadding>
                    <ListItemText primary="" primaryTypographyProps={{ fontWeight: 800}}/>
                    <List disablePadding>
                        <ListItem disablePadding>
                            <ListItemText primary="- "/>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary=" - "/>
                        </ListItem>
                    </List>
                </ListItem>
 */