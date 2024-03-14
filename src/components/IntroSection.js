// src/components/SupportSection.js
import React from 'react';
import { Box, Typography, Container, Divider } from '@mui/material';

function IntroSection() {
  return (
    <Box sx={{ backgroundColor: '#fff', padding: '8rem 0', color: '#23395d'}}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" align="center" sx={{ color: '#23395d', mb: 4 }} >
          WE’RE THE SOUTHSEA SCULLERS
        </Typography>
        <Divider variant="middle" sx={{ margin: '60px auto', width: '20%', backgroundColor: '#23395d' }} />
        <Typography variant="h6" align="center" sx={{ color: '#23395d', mb: 4 }}>
          SUPPORT US AS WE ATTEMPT TO ROW THE ATLANTIC OCEAN IN THE WORLD'S TOUGHEST ROW 2025.
        </Typography>
        <Typography align="center" sx={{color: "gray"}}>
        WE WANT TO PROVE ORDINARY PEOPLE CAN DO EXTRAORDINARY THINGS WHILE RAISING MONEY FOR CURE PARKINSON’S & MSA TRUST.
        </Typography>
      </Container>
    </Box>
  );
}

export default IntroSection;
