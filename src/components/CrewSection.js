import React from 'react';
import { Box, Divider, Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import crewGirl from '../assets/crew_girl.png';
import crewYoung from '../assets/crew_young.png';
import crewBoy from '../assets/crew_boy.png';
import crewOld from '../assets/crew_old.png';


// Example images for each crew member - replace these with actual image paths
const crewMembers = [
  {
    name: 'George Johnson, 29 (Captain)',
    role: 'Participant for a Cause',
    bio: 'Mike is taking part in the challenge to raise money for a fantastic cause and to show his daughters that anything is possible...',
    image: crewBoy,
  },
  {
    name: 'Sam Gibbons, 29 (Vice Captain)',
    role: 'Accomplished Navigator',
    bio: 'Jack is an accomplished navigator, but think his ears\' ability to catch Atlantic trade winds might be his biggest asset...',
    image: crewGirl, 
  },
  {
    name: 'Adam Cresswell, 29',
    role: 'Enthusiastic Endurance Amateur',
    bio: 'Dan calls himself an enthusiastic endurance amateur and the (sometimes) steady head on an unsteady ship. He grew up in Yorkshire and now lives in London...',
    image: crewOld, 
  },
  {
    name: 'Alex Zacharius, 28',
    role: 'Admin and Music Playlist Lead',
    bio: 'JC is the admin and music playlist lead in the team. And because the row was his idea, he says he is ready to take the flack...',
    image: crewYoung, 
  },
];

function CrewSection() {
  return (
    <Box sx={{ backgroundColor: '#fff', padding: '8rem 0' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          THE CREW
        </Typography>
        <Divider variant="middle" sx={{ margin: '60px auto', width: '20%', backgroundColor: '#23395d' }} />
        <Typography variant="h6" align="center" sx={{ marginBottom: '2rem' }}>
          We’re four 30/40-something blokes who like to push themselves now and then. Three of us work in fitness, but none of us are endurance pros, and only one of us has rowing experience. For all of us, this is the biggest challenge we’ve ever faced (other than having kids).
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
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
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
