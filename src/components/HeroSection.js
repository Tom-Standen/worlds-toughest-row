import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import backgroundImage from '../assets/hero.png'; // Adjust the path according to your project structure

function HeroSection() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Adjust the height as needed
        color: '#fff', // This sets the text color to white; adjust as needed
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center', paddingBottom: '10%'}}>
        <Typography variant="h2" component="h1" gutterBottom>
          Southsea Scullers
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Sculling the atlantic for MSA & Parkinson's 
        </Typography>
      </Container>
    </Box>
  );
}

export default HeroSection;
