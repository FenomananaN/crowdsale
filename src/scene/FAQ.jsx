import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from '@mui/material'
import React from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const FAQ = () => {
  return (
    <Container sx={{py:3}}>

        <Typography variant='h5' align='center' sx={{color: '#0B5E8F', fontWeight: 'bold'}}>FAQs</Typography>
         <Accordion sx={{my:1}} defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: '#0B5E8F'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{backgroundColor: '#282c34'}}
            >
              <Typography sx={{ fontWeight: 'bold'}}>
                    1. What is TATA Coin?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#393f4a'
            }}>
              <Typography>
              TATA Coin is a memecoin that brings a daily dose of laughter and good vibes to the crypto community. Inspired by the bold spirit of the expression "TATA," our memecoin offers a joyful experience in the world of cryptocurrency.
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
                2. What is the utility of TATA Coin?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#393f4a'
            }}>
              <Typography>
              Beyond the memetic aspect, TATA Coin has real utility in the crypto ecosystem. It can be used for fast transactions, community rewards, and other activities within the community.              </Typography>
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
              3. How can I get TATA Coins?  
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#393f4a'
            }}>
              <Typography>
              You can obtain TATA Coins by participating in the initial public distribution (ICO/IDO) or by trading them on trusted trading platforms once it is listed.
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
              4. What is the initial distribution of TATA Coin?  
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#393f4a'
            }}>
              <Typography>
              The initial distribution of TATA Coin includes a portion for the public community, the team and developers, a foundation reserve, partnerships and marketing, as well as community rewards.
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
              5. How does staking work with TATA Coin?   
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#393f4a'
            }}>
              <Typography>
              TATA holders can participate in staking to earn additional rewards. Staking provides an active way to engage with the community and gain benefits.
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
              6. What is the vesting for the team and developers?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#393f4a'
            }}>
              <Typography>
              Vesting is a mechanism that locks a portion of the tokens for a defined period. For the team and developers, it aims to align incentives and ensure long-term commitment.
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
              7. What are the transaction fees for TATA Coin?  
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#393f4a'
            }}>
              <Typography>
              A portion of the transaction fees (1%) is redistributed to TATA holders. Additionally, 1% is added to the Liquidity Reserve, and 1% is allocated to development and marketing operations.
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
              8. Are there burning events for TATA Coin?   
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#393f4a'
            }}>
              <Typography>
              Yes, 1% of TATA tokens from transaction fees will be burned with each transaction, contributing to scarcity and potential long-term value.
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
              9. How can I join the TATA community?  
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#393f4a'
            }}>
              <Typography>
              You can join the TATA community on our Discord and follow our social media for participating in events, contests, and interacting with other community members.
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
              10. What is the long-term vision for TATA Coin?  
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#393f4a'
            }}>
              <Typography>
              The long-term vision for TATA Coin is to become a dynamic, joyful, and thriving community in the crypto ecosystem while continuing to offer a memorable and fun experience.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Typography>
          Feel free to adapt these questions based on the specific characteristics of TATA Coin and potential concerns from the community.
          </Typography>
    </Container>
  )
}
