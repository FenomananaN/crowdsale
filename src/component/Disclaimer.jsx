import { Box, Container, Dialog, DialogContent, DialogTitle, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close'


export const Disclaimer = ({open,setOpen}) => {
  return (
    <Dialog onClose={()=>setOpen(false)} open={open?open:false} fullScreen >
        <DialogTitle align='center'>DISCLAIMER</DialogTitle>
        <DialogContent>
            <Container>

            <IconButton sx={{position:'absolute', right: 3, top:3}} onClick={()=>setOpen(false)}>
                <CloseIcon/>
            </IconButton>
            <List sx={{ listStyle: "decimal", pl: {xs:2,md:4} ,
                    ['& li.MuiListItem-root::marker']:{
                        fontWeight:600
            } }}> {/* use listStyle: "lower-alpha" for a b c*/}

                <ListItem sx={{ display: "list-item" }} disablePadding>
                    <ListItemText primary="General Warning:" primaryTypographyProps={{ fontWeight: 800}}/>
                    <List disablePadding>
                        <ListItem disablePadding>
                            <ListItemText primary="- BITJOY is a memecoin created for entertainment purposes and possesses no intrinsic value or real-world utility."/>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary=" - Potential investors must understand that BITJOY is highly speculative and should not be considered as a serious investment."/>
                        </ListItem>
                    </List>
                </ListItem>

                <ListItem sx={{ display: "list-item" }} disablePadding>
                    <ListItemText primary="Speculative Nature:" primaryTypographyProps={{ fontWeight: 800}}/>
                    <List disablePadding>
                        <ListItem disablePadding>
                            <ListItemText primary="- BITJOY is created solely to capitalize on Internet trends and popular memes. Its price can be extremely volatile and is prone to significant fluctuations without prior warning."/>
                        </ListItem>
                    </List>
                </ListItem>

                <ListItem sx={{ display: "list-item" }} disablePadding>
                    <ListItemText primary="No Guarantee of Returns" primaryTypographyProps={{ fontWeight: 800}}/>
                    <List disablePadding>
                        <ListItem disablePadding>
                            <ListItemText primary="- No guarantees are provided regarding the profitability of investing in BITJOY. Investors should be prepared to lose the entirety of their investment without a significant impact on the project itself."/>
                        </ListItem>
                    </List>
                </ListItem>

                <ListItem sx={{ display: "list-item" }} disablePadding>
                    <ListItemText primary="Lack of Fundamental Basis:" primaryTypographyProps={{ fontWeight: 800}}/>
                    <List disablePadding>
                        <ListItem disablePadding>
                            <ListItemText primary="- BITJOY lacks a fundamental basis, and its price is not tied to economic, technological, or business factors. It is heavily influenced by external events and irrational market trends."/>
                        </ListItem>
                    </List>
                </ListItem>

                <ListItem sx={{ display: "list-item" }} disablePadding>
                    <ListItemText primary="Extreme Volatility:" primaryTypographyProps={{ fontWeight: 800}}/>
                    <List disablePadding>
                        <ListItem disablePadding>
                            <ListItemText primary="- Price fluctuations of BITJOY can be extremely rapid and significant. Investors should be aware of the risks associated with the highly speculative nature of this memecoin."/>
                        </ListItem>
                    </List>
                </ListItem>

                <ListItem sx={{ display: "list-item" }} disablePadding>
                    <ListItemText primary="No Liability:" primaryTypographyProps={{ fontWeight: 800}}/>
                    <List disablePadding>
                        <ListItem disablePadding>
                            <ListItemText primary="- The BITJOY development team cannot be held responsible for financial losses incurred by investors. It is the responsibility of each individual to conduct thorough research before investing in digital assets."/>
                        </ListItem>
                    </List>
                </ListItem>

                <ListItem sx={{ display: "list-item" }} disablePadding>
                    <ListItemText primary="Regulation:" primaryTypographyProps={{ fontWeight: 800}}/>
                    <List disablePadding>
                        <ListItem disablePadding>
                            <ListItemText primary="- Investors must comply with the laws and regulations in their respective jurisdictions. Cryptocurrency regulations may vary, and it is the responsibility of each investor to adhere to them."/>
                        </ListItem>
                    </List>
                </ListItem>

                <ListItem sx={{ display: "list-item" }} disablePadding>
                    <ListItemText primary="Public Communication:" primaryTypographyProps={{ fontWeight: 800}}/>
                    <List disablePadding>
                        <ListItem disablePadding>
                            <ListItemText primary="- BITJOY is a community-driven initiative. Any information communicated publicly, whether on social media, forums, or any other channel, does not constitute financial advice or an invitation to invest."/>
                        </ListItem>
                    </List>
                </ListItem>

            </List>

            <Typography sx={{fontStyle:'italic', fontWeight:'bold', mt:2, mb:6}}>
            By investing in BITJOY, investors acknowledge having read and understood this disclaimer and accept the inherent risks associated with investing in a memecoin with no intrinsic value. It is strongly recommended to consult with a financial advisor before making any investment decisions.
            </Typography>
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