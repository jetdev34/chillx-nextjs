import React from "react";
import AboutSection from "./_components/AboutSection";
import FullscreenSection from "./_components/FullscreenSection";
import ConfigSection from "./_components/ConfigSection";
import PomodoroSection from "./_components/PomodoroSection";
import SocialSection from "./_components/SocialSection";

function Navbar() {
  return (
    <nav className="py-6">
      <div className="container flex justify-between items-center">
        <h1 className="neon-lights-red">lofi beats</h1>
        <ul className="flex gap-4">
          <FullscreenSection />
          <ConfigSection />
          <PomodoroSection />
          <SocialSection />
          <AboutSection />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
