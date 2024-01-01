import { Box, Container, List, ListItem, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'
import TokenomicsTokenShare from '../assets/image/tokenomics.png'
import { ChartLabel } from '../component'

export const Tokenomics = ({id}) => {
  return (
    <Container id={id} sx={{py:3}}>

        <Paper sx={{ p:3, backgroundColor: '#282C34'}} elevation={0}>
            <Typography variant='h4' align='center' sx={{color: '#0B5E8F', fontWeight: 'bold'}}>TOKENOMICS</Typography>

            <Typography variant='h6'>TOTAL SUPPLY = <span style={{padding:6, backgroundColor:'#05A76C', borderRadius:5}}>210,000,000 TATA</span></Typography>

            <List sx={{ listStyle: "decimal", pl: 4 ,
                    ['& li.MuiListItem-root::marker']:{
                        fontWeight:600
                    } }}> {/* use listStyle: "lower-alpha" for a b c*/}
                <ListItem sx={{ display: "list-item" }} disablePadding>
                    <ListItemText primary="Initial Distribution:" primaryTypographyProps={{ fontWeight: 800}}/>
                    {/* 2em method <ListItemText disableTypography primary={<Typography .....}  */}
                    <Box sx={{display:'flex',flexDirection:{xs:'column-reverse',md:'row'}, alignItems:'center', justifyContent:{xs:'center', md:'start'}}}>
                    <List disablePadding>
                        <ListItem disablePadding>
                            <ListItemText disableTypography primary={<ChartLabel color={'#4285F4'} text={" Public Distribution (ICO/IDO): 60% (126,000,000 TATA)"}/>}/>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText disableTypography primary={<ChartLabel color={'#EA4335'} text={"Team and Developers: 15% (31,500,000 TATA)"}/>}/>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText disableTypography primary={<ChartLabel color={'#FBBC04'} text={"Foundation Reserve: 10% (21,000,000 TATA)"}/>}/>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText disableTypography primary={<ChartLabel color={'#34A853'} text={"Partnerships and Marketing: 10% (21,000,000 TATA)"}/>}/>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText disableTypography primary={<ChartLabel color={'#FF6D01'} text={"Community Rewards and Incentives: 5% (10,500,000 TATA)"}/>}/>
                        </ListItem>
                    </List>
                        <Box
                            component={'img'}
                            src={TokenomicsTokenShare}
                            height={180}
                            marginLeft={4}
                        />
                    </Box>
                </ListItem>

                <ListItem sx={{ display: "list-item" }} disablePadding>
                    <ListItemText primary="Vesting:" primaryTypographyProps={{ fontWeight: 800}}/>
                    <List disablePadding>
                        <ListItem disablePadding>
                            <ListItemText primary="- Team and Developers: 4-year vesting with an annual unlock of 25% after the first year."/>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary=" - Foundation Reserve: 3-year vesting with an annual unlock of 33.33%."/>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary="- Partnerships and Marketing: 2-year vesting with an annual unlock of 50%."/>
                        </ListItem>
                    </List>
                </ListItem>

                <ListItem sx={{ display: "list-item" }} disablePadding>
                    <ListItemText primary="Use of Foundation Reserve Funds:" primaryTypographyProps={{ fontWeight: 800}} />
                    <List disablePadding>
                        <ListItem disablePadding>
                            <ListItemText primary="- Technology Development: 40%"/>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary=" - Community Programs: 30%"/>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary="- Liquidity Reserve: 20%"/>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary="- Strategic Partnerships: 10%"/>
                        </ListItem>
                    </List>
                </ListItem>

                <ListItem sx={{ display: "list-item" }} disablePadding>
                    <ListItemText primary="Burn Events:" primaryTypographyProps={{ fontWeight: 800}} />
                    <List disablePadding>
                        <ListItem disablePadding>
                            <ListItemText primary="- 1% of TATA from transaction fees will be burned in each transaction."/>
                        </ListItem>
                    </List>
                </ListItem>

                <ListItem sx={{ display: "list-item" }} disablePadding>
                    <ListItemText primary="Staking and Rewards:" primaryTypographyProps={{ fontWeight: 800}} />
                    <List disablePadding>
                        <ListItem disablePadding>
                            <ListItemText primary="- TATA holders can participate in staking to earn additional rewards."/>
                        </ListItem>
                    </List>
                </ListItem>

                <ListItem sx={{ display: "list-item" }} disablePadding>
                    <ListItemText primary=" Transaction Fees:" primaryTypographyProps={{ fontWeight: 800}} />
                    <List disablePadding>
                        <ListItem disablePadding>
                            <ListItemText primary="- 2% of each transaction will be redistributed to TATA holders."/>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary=" - 1% will be added to the Liquidity Reserve."/>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary=" - 1% will be allocated to development and marketing operations."/>
                        </ListItem>
                    </List>
                </ListItem>

            </List>
        </Paper>
    </Container>
  )
}
