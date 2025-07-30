import React from 'react';
import FractalBackground from './components/FractalBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import SensorialExperience from './components/SensorialExperience';
import Manifesto from './components/Manifesto';
import Artists from './components/Artists';
import EventMap from './components/EventMap';
import InclusionGuidelines from './components/InclusionGuidelines';
import WorkshopsAndTalks from './components/WorkshopsAndTalks';
import TicketsAndAccess from './components/TicketsAndAccess';
import CommunityGallery from './components/CommunityGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InclusiveChatbot from './components/InclusiveChatbot';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-gray-100 overflow-x-hidden">
      <FractalBackground />
      <Header />
      <main>
        <Hero />
        <SensorialExperience />
        <Manifesto />
        <Artists />
        <EventMap />
        <InclusionGuidelines />
        <WorkshopsAndTalks />
        <TicketsAndAccess />
        <CommunityGallery />
        <Contact />
      </main>
      <Footer />
      <InclusiveChatbot />
    </div>
  );
}

export default App;