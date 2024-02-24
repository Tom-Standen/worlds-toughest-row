import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import the theme you defined
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import TimeSection from './components/TimeSection';
import CrewSection from './components/CrewSection';
// Import other components here

function App() {
  return (
    <ThemeProvider theme={theme}> {/* Wrap your components with ThemeProvider */}
      <div className="App">
        <Navbar />
        <HeroSection />
        <IntroSection />
        <TimeSection />
        <CrewSection />
        {/* Include other components here */}
      </div>
    </ThemeProvider>
  );
}

export default App;
