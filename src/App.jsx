import React, { useRef } from 'react';
import FloatingEmojis from './components/FloatingEmojis';
import HeroSection from './components/HeroSection';
import ApologyLetter from './components/ApologyLetter';
import FriendshipCards from './components/FriendshipCards';
import FunnySection from './components/FunnySection';
import InteractiveSection from './components/InteractiveSection';
import Footer from './components/Footer';

export default function App() {
  const letterRef = useRef(null);

  function handleOpenNote() {
    letterRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Ambient floating emojis — fixed layer */}
      <FloatingEmojis />

      {/* All page sections */}
      <main>
        <HeroSection onOpenNote={handleOpenNote} />

        <div ref={letterRef}>
          <ApologyLetter />
        </div>

        <FriendshipCards />
        <FunnySection />
        <InteractiveSection />
      </main>

      <Footer />
    </div>
  );
}
