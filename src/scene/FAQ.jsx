import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from '@mui/material'
import React from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

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
              BITJOY is a playful and positive crypto token launched on the Binance Smart Chain (BSC). It aims to bring joy and optimism to the crypto community while providing a unique trading experience.              </Typography>
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
              You can buy BITJOY here, during the presale, or later on exchange platforms after the launch.
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
              BITJOY offers a unique experience focused on positivity, with rewards for the community. Holders can participate in special events and enjoy an active and engaged community.              </Typography>
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
              5. How can I check my BITJOY balance?   
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#393f4a'
            }}>
              <Typography>
              You can check your BITJOY balance using a BSC block explorer such as BscScan and connecting your wallet.              </Typography>
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
              6. How can I participate in community events?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#393f4a'
            }}>
              <Typography>
              Stay tuned for announcements on our official social media channels. We regularly organize community events, contests, and rewards for BITJOY holders.              </Typography>
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
              7. How can I contribute to the development of the BITJOY community?  
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#393f4a'
            }}>
              <Typography>
              You can contribute by participating in discussions on our official communication channels, sharing ideas, and inviting others to join the community. We value active community participation.              </Typography>
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
              8. Are there future plans for BITJOY?   
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#393f4a'
            }}>
              <Typography>
              We have exciting plans for the ongoing development of BITJOY, including new features, partnerships, and integrations. Stay tuned for official announcements.              </Typography>
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
              9. How can I actively engage in the BITJOY community?  
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


          <Accordion sx={{my:1}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: '#0B5E8F'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{backgroundColor: '#282c34'}}
            >
              <Typography sx={{ fontWeight: 'bold'}}>  
              10. How does BITJOY contribute to philanthropy or social causes?  
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            sx={{
              bgcolor: '#393f4a'
            }}>
              <Typography>
              BITJOY is committed to giving back to the community. A portion of our profits is allocated to charitable works and social initiatives. Stay informed on our official channels to learn about the philanthropic projects we support and how you can contribute.              </Typography>
            </AccordionDetails>
          </Accordion>

    </Container>
  )
}
