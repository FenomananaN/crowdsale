import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from '@mui/material'
import React from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokenAddress } from '../contract'
import { useTruncateString } from '../utils'

export const FAQ = ({id}) => {
  return (
    <Container sx={{py:3}} id={id}>

        <Typography variant='h5' align='center' sx={{color: '#0B5E8F', fontWeight: 'bold'}}>FAQs</Typography>
         <Accordion sx={{my:1}} defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: '#0B5E8F'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{backgroundColor: '#282c34'}}
            >
              <Typography sx={{ fontWeight: 'bold'}}>
                    1. What is BITJOY?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#393f4a'
            }}>
              <Typography>
              BITJOY is a playful and positive crypto token launched on the Binance Smart Chain (BSC). It aims to bring joy and optimism to the crypto community.</Typography>
            </AccordionDetails>
          </Accordion>
          
          <Accordion sx={{my:1}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: '#0B5E8F'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{backgroundColor: '#282c34'}}
            >
              <Typography sx={{ fontWeight: 'bold'}}>
                2.  How can I buy BITJOY?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#393f4a'
            }}>
              <Typography>
              You can buy BITJOY here, during the crowdsale, or later on exchange platforms after the launch.
              </Typography>            
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{my:1}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: '#0B5E8F'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{backgroundColor: '#282c34'}}
            >
              <Typography sx={{ fontWeight: 'bold'}}>  
              3. What is the total supply of BITJOY?  
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#393f4a'
            }}>
              <Typography>
              The total supply of BITJOY is 21 billion units.              </Typography>
            </AccordionDetails>
          </Accordion>


          <Accordion sx={{my:1}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: '#0B5E8F'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{backgroundColor: '#282c34'}}
            >
              <Typography sx={{ fontWeight: 'bold'}}>  
              4. What are the benefits of BITJOY?  
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#393f4a'
            }}>
              <Typography>
              BITJOY offers a unique experience focused on positivity. Holders can enjoy an active and engaged community.              </Typography>
            </AccordionDetails>
          </Accordion>


          <Accordion sx={{my:1}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: '#0B5E8F'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{backgroundColor: '#282c34'}}
            >
              <Typography sx={{ fontWeight: 'bold'}}> 
              5.  What is the contract address of BITJOY?   
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#393f4a'
            }}>
              <Typography>
              The contract address of BITJOY is {useTruncateString(tokenAddress)} that you can check on the Binance Smart Chain Explorer &nbsp;
             <a href={`https://scan.coredao.org/address/${tokenAddress}`} target='_blank' rel='noopener noreferrer'>bsc scan </a>
              </Typography>
            </AccordionDetails>
          </Accordion>


          


          <Accordion sx={{my:1}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: '#0B5E8F'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{backgroundColor: '#282c34'}}
            >
              <Typography sx={{ fontWeight: 'bold'}}>  
              6. How can I contribute to the development of the BITJOY community?  
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#393f4a'
            }}>
              <Typography>
              You can contribute by participating in discussions on our official communication channels, sharing ideas, and inviting others to join the community.              </Typography>
            </AccordionDetails>
          </Accordion>


         

          <Accordion sx={{my:1}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: '#0B5E8F'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{backgroundColor: '#282c34'}}
            >
              <Typography sx={{ fontWeight: 'bold'}}>  
              7. How can I actively engage in the BITJOY community?  
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#393f4a'
            }}>
              <Typography>
              To actively engage in the BITJOY community, join our discussion forums and social media channels. Share your ideas, engage in discussions, and provide suggestions. We encourage a dynamic and participative community.              </Typography>
            </AccordionDetails>
          </Accordion>
        

    </Container>
  )
}
