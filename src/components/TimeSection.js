// src/components/TimeSection.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Divider } from '@mui/material';

const calculateTimeLeft = () => {
  const difference = +new Date('12/01/2025') - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

function TimeSection() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <Box id="challenge" sx={{ backgroundColor: '#23395d', color: '#fff', padding: '8rem 0' }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          THE CHALLENGE
        </Typography>
        <Divider variant="middle" sx={{ margin: '50px auto', width: '20%', backgroundColor: 'white' }} />
        <Typography variant="h6" align="center" gutterBottom>
          Time until the 2025 race starts
        </Typography>
        <Box
          sx={{
            backgroundColor: '#2e5481', // Lighter shade for the countdown box
            padding: '22px',
            width: '80%', // Set width of the box
            maxWidth: '600px', // Ensures the box does not stretch too wide on larger screens
            margin: '30px auto',
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'center', // Center the contents horizontally
            alignItems: 'center', // Center the contents vertically
          }}
        >
        <Typography variant="h5" align="center" gutterBottom>
          {timeLeft.days || 0} Days {timeLeft.hours || 0} Hours {timeLeft.minutes || 0} Minutes {timeLeft.seconds || 0} Seconds
        </Typography>
        </Box>
        <Typography align="center">
          The World’s Toughest Row is a 3,000-mile race from the Canary Islands to Antigua. Every December, up to 30 teams from around the world take on the challenge, with the current record at 29 days, 14 hours and 34 minutes

        </Typography>
        <Typography align="center" sx={{marginTop: '30px'}}>        
          In 2025, one of those teams will be us.
        </Typography>
      </Container>
    </Box>
  );
}

export default TimeSection;
