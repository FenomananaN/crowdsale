import { Box, Container, List, ListItem, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'
import TokenomicsTokenShare from '../assets/image/tokenomics.png'
import { ChartLabel } from '../component'

export const Tokenomics = ({id}) => {
  return (
    <Container id={id} sx={{py:3}}>

        <Paper sx={{ p:3, backgroundColor: '#282C34'}} elevation={0}>
            <Typography variant='h4' align='center' sx={{color: '#0B5E8F', fontWeight: 'bold'}}>TOKENOMICS</Typography>

            <Typography variant='h6'>TOTAL SUPPLY = <span style={{padding:6, backgroundColor:'#05A76C', borderRadius:5}}>210,000,000 BITJOY</span></Typography>

            <List sx={{ listStyle: "decimal", pl: {xs:2,md:4} ,
                    ['& li.MuiListItem-root::marker']:{
                        fontWeight:600
                    } }}> {/* use listStyle: "lower-alpha" for a b c*/}
                <ListItem sx={{ display: "list-item" }} disablePadding>
                    <ListItemText primary="Initial Distribution:" primaryTypographyProps={{ fontWeight: 800}}/>
                    {/* 2em method <ListItemText disableTypography primary={<Typography .....}  */}
                    <Box sx={{display:'flex',flexDirection:{xs:'column-reverse',md:'row'}, alignItems:'center', justifyContent:{xs:'center', md:'start'}}}>
                    <List disablePadding>
                        <ListItem disablePadding>
                            <ListItemText disableTypography primary={<ChartLabel color={'#4285F4'} text={" Public Sale: 80%"}/>}/>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText disableTypography primary={<ChartLabel color={'#EA4335'} text={" Liquidity: 20%"}/>}/>
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
                    <ListItemText primary="Use of Public Sale Funds:" primaryTypographyProps={{ fontWeight: 800}}/>
                    <List disablePadding>
                        <ListItem disablePadding>
                            <ListItemText primary="- 40% for project development, including technology, security, and ongoing improvement"/>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary=" - 30% for marketing and promotion to expand the BITJOY community and awareness."/>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary="- 15% for reserves and financial security of the project."/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="- 15% reinvested into the community for special events, rewards, and incentives to encourage active participation"/>
                        </ListItem>
                    </List>
                </ListItem>

                <ListItem sx={{ display: "list-item" }} disablePadding>
                    <ListItemText primary="Liquidity:" primaryTypographyProps={{ fontWeight: 800}} />
                    <List disablePadding>
                        <ListItem disablePadding>
                            <ListItemText primary="- Funds allocated to liquidity will be used to create liquidity pairs on decentralized trading platforms, ensuring stability and ease of exchange for BITJOY holders"/>
                        </ListItem>
                    </List>
                </ListItem>
            </List>
            <Typography>
            This distribution aims to ensure continuous growth and development of the community while providing adequate liquidity for the BITJOY token on trading platforms. Feel free to adjust these percentages based on the specific vision of your project and feedback from your community.
            </Typography>
        </Paper>
    </Container>
  )
}
