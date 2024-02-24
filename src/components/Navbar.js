import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <AppBar position="absolute" sx={{ background: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Southsea Scullers
        </Typography>
        <Button color="inherit">The Crew</Button>
        <Button color="inherit">The Challenge</Button>
        <Button color="inherit">The Charity</Button>
        {/* sponsor should take you to this url: https://www.gofundme.com/f/journey-to-the-atlantic-twac-2025 */}
        <Button color="inherit" href="https://www.gofundme.com/f/journey-to-the-atlantic-twac-2025">Sponsor</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
