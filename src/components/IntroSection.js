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
          SUPPORT US AS WE ATTEMPT TO ROW AN OCEAN IN THE 2024 WORLD'S TOUGHEST ROW
        </Typography>
        <Typography align="center" sx={{color: "gray"}}>
          Every pound of the money we raise will go to the charity CALM, a leading UK movement against suicide. Chip in to help us reach our £250,000 target and open the conversation around men’s mental health.
        </Typography>
      </Container>
    </Box>
  );
}

export default IntroSection;
