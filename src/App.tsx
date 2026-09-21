import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Business from './components/Business';
import Recruit from './components/Recruit';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: FC = () => {
  return (
    <Box maxW="100vw">
      <Header />
      <Hero />
      <About />
      <Business />
      <Recruit />
      <Benefits />
      <Contact />
      <Footer />
    </Box>
  );
};

export default App;
