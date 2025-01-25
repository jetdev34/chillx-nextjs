import React from "react";
import AboutSection from "./_components/AboutSection";
import FullscreenSection from "./_components/FullscreenSection";
import ConfigSection from "./_components/ConfigSection";
import PomodoroSection from "./_components/PomodoroSection";
import SocialSection from "./_components/SocialSection";
import { TITLE } from "@/lib/constants";
function Navbar() {
  return (
    <nav className="py-6">
      <div className="container flex justify-between items-center">
        <h1 className="neon-lights-red">{TITLE}</h1>
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
