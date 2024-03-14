import React from 'react';
import { Box, Divider, Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
// import crewGirl from '../assets/crew_girl.png';
// import crewYoung from '../assets/crew_young.png';
// import crewBoy from '../assets/crew_boy.png';
// import crewOld from '../assets/crew_old.png';
import cress from '../assets/cress.jpg';
import gj from '../assets/gj.jpg';
import zachs from '../assets/zachs.jpg';
import sam from '../assets/sam.jpg';


// Example images for each crew member - replace these with actual image paths
const crewMembers = [
  {
    name: 'George Johnson, 29',
    role: 'Participant for a Cause',
    bio: "With the most serious sounding job of us all, he's surprisingly unserious. Strong like a rampaging rhino, expect some serious power output on the oars.",
    image: gj,
  },
  {
    name: 'Sam Gibbons, 29',
    role: 'Accomplished Navigator',
    bio: "The Southsea Scullers are Gibbo's brainchild. He answered the call of the sea and brought the team together (much to their girlfriend's collective disappointment).",
    image: sam, 
  },
  {
    name: 'Adam Cresswell, 29',
    role: 'Enthusiastic Endurance Amateur',
    bio: 'Cress is the cardio specialist and the CHIEF MUSIC OFFICER for this voyage. What he lacks in height, he makes up for in lung capacity.',
    image: cress, 
  },
  {
    name: 'Alex Zacharius, 28',
    role: 'Admin and Music Playlist Lead',
    bio: 'Zachs boasts what is sured to be the best moustache on all the Seven Seas and will be the voice of reason through this journey.',
    image: zachs, 
  },
];

function CrewSection() {
  return (
    <Box id="crew" sx={{ backgroundColor: '#fff', padding: '8rem 0' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          THE CREW
        </Typography>
        <Divider variant="middle" sx={{ margin: '60px auto', width: '20%', backgroundColor: '#23395d' }} />
        <Typography variant="h6" align="center" sx={{ marginBottom: '2rem' }}>
        We’re four blokes in our late 20s who met at University, who share a common goal: to push our limits and find out what is possible. One of us works in fitness, one is an NHS physio, one is a project manager and the other an investment advisor. This will be the biggest challenge any of us has undertaken.
        </Typography>
        <Grid container spacing={4}>
          {crewMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="260"
                  image={member.image}
                  alt={member.name}
                />
                <CardContent sx={{height: '200px'}}>
                  <Typography gutterBottom variant="h5" component="div" sx={{height: '4rem'}}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.bio}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default CrewSection;
