// src/components/SupportSection.js
import React from 'react';
import { Box, Typography, Container, Divider, Button } from '@mui/material';

function SponsorSection() {
  return (
    <Box id='sponsor' sx={{ backgroundColor: '#fff', padding: '8rem 0', color: '#23395d'}}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" align="center" sx={{ color: '#23395d', mb: 4 }} >
          SPONSOR
        </Typography>
        <Divider variant="middle" sx={{ margin: '60px auto', width: '20%', backgroundColor: '#23395d' }} />
        <Typography variant="h6" align="center" sx={{ color: '#23395d', mb: 4 }}>
        The World’s Toughest Row is a globally recognised event, with strong media coverage every year. Former teams have featured in publications like The Times and New York Post.
        </Typography>
        <Typography align="center" sx={{color: "#23395d", mb: 4}}>
        A rowing boat is a floating billboard and through WTR’s media team who create and publish content, there were 190+ million pieces of coverage for the 2021/22 campaign, reaching 75 million people through a globally visible and diverse platform.
        </Typography>
        <Typography align="center" sx={{color: "#23395d", mb: 4}}>
        The simple truth of the matter is that our campaign and all the money we hope to raise for charity will not happen without the support of our incredibly generous sponsors. We can’t do this without your help, and so would love to speak with you about sponsorship opportunities.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button
            variant="contained"
            size="large"
            sx={{ backgroundColor: '#23395d', '&:hover': { backgroundColor: '#1b2a40' } }} 
            href="https://linktr.ee/southseascullers?utm_source=linktree_admin_share&fbclid=PAAaZb7l4tSRxeoY6O-X3nPdFAQ_ztjThWmWfVp43AvqLEhGjvjmuY7jdCHmI_aem_ASZwQ9SmDyNhCtdEWF57SenKpPMWSGhtL81KFr47MwMo1F7dnM9743LThn-EDxhSHMk"

            >
            SPONSOR US HERE
            </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default SponsorSection;
