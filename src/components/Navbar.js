import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.png';
import { Box, } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="absolute" sx={{ background: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} >
          <img src={logo} alt="Southsea Scullers" style={{ maxWidth: '100px', height: 'auto',}} />
        </Box>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}
        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Southsea Scullers
        </Typography> */}
        <Button href="#challenge" color="inherit">The Challenge</Button>
        <Button href="#crew" color="inherit">The Crew</Button>
        <Button href='#charities' color="inherit">The Cause</Button>
        {/* sponsor should take you to this url: https://www.gofundme.com/f/journey-to-the-atlantic-twac-2025 */}
        <Button href='#sponsor' color="inherit">Sponsor</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
