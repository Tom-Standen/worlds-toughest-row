import React from 'react';
import { Box, Typography, Container, Grid, Paper, Divider, List, ListItem } from '@mui/material';
import cureParkinsonsLogo from '../assets/cure-parkinsons.png'; // Adjust path as needed
import msaTrustLogo from '../assets/msa-trust.png'; // Adjust path as needed

function CharitiesSection() {
    // Define styles with responsive typography
  const responsiveTypography = {
    '@media (max-width:600px)': {
      fontSize: '0.9rem', // Smaller font size on screens less than 600px wide
    }
  };
  return (
    <Box id='charities' sx={{ backgroundColor: '#23395d', color:'#fff', padding: '8rem 0' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          THE CHARITIES
        </Typography>
        <Divider variant="middle" sx={{ margin: '60px auto', width: '20%', backgroundColor: '#fff' }} />

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{maxHeight: '220px', marginTop: '30px', width: '100%'}}>
                    <img src={cureParkinsonsLogo} alt="Cure Parkinson's" style={{ maxWidth: '100%', height: 'auto'   }} />
                </Box>
                <Box sx={{height: '320px'}}>
                    <Typography variant="h6" align="center" gutterBottom>
                        What they do:
                    </Typography>
                    <Typography align="center" gutterBottom sx={responsiveTypography}>
                            Fund research to find a cure for Parkinson's.
                    </Typography>
                    <Typography align="center" gutterBottom sx={responsiveTypography}>
                        Funded over £75 million of clinical trials since 2005 through donation funds raised
                    </Typography>
                    <Typography align="center" gutterBottom sx={responsiveTypography}>
                            100% reliant on donations to fund their work.
                    </Typography>
                    <Typography variant="h6" align="center" sx={{ marginTop: '1rem' }} gutterBottom>
                        Why?
                    </Typography>
                    <Typography align="center" gutterBottom sx={responsiveTypography}>
                        George’s Dad has been living with Parkinson’s for the past 12 years.
                    </Typography>
                    <Typography align="center"  sx={responsiveTypography}>
                        Currently Parkinson’s symptoms are treated with a range of medication, but CP is committed to finding a cure for the underlying disease
                    </Typography>
                </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{maxHeight: '250px', width: '100%'}}>
                    <img src={msaTrustLogo} alt="MSA Trust" style={{ maxWidth: '90%', height: 'auto' }} />
                </Box>
                <Box sx={{height: '320px'}}>
                    <Typography variant="h6" align="center" gutterBottom>
                        What they do:
                    </Typography>
                    <Typography align="center" gutterBottom sx={responsiveTypography}>
                        MSA is a rare neurological disease with no known cause or cure.
                    </Typography>
                    <Typography align="center" gutterBottom sx={responsiveTypography}>
                    The MSA Trust aims to find a cure and until that day, supports those affected so they are not alone on their individual journeys.
                    </Typography>
                    <Typography variant="h6" align="center" sx={{ marginTop: '1rem' }} gutterBottom>
                        Why?
                    </Typography>
                    <Typography align="center" gutterBottom sx={responsiveTypography}>
                        Sam’s Uncle is living with MSA.
                    </Typography>
                    <Typography align="center" gutterBottom sx={responsiveTypography}>
                        The work of the MSA Trust is crucial to supporting those living with this little understood medical condition.
                    </Typography>
                    <Typography align="center" gutterBottom sx={responsiveTypography}>
                        Their work is reliant on donations.
                    </Typography>
                </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default CharitiesSection;
