"use client";

import React, { useState, useEffect } from "react";
import MusicButtons from "./MusicButtons";
import { BGM } from "@/lib/data";

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    setIsClient(true); // Ensure the component is mounted on the client
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % BGM.length); // Move to the next track
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? BGM.length - 1 : prevIndex - 1
    );
  };

  if (!isClient) {
    return null; // Avoid SSR mismatch
  }

  return (
    <section className="fixed bottom-0 left-0 w-full py-6">
      <div className="container space-y-2">
        <MusicButtons
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          currentIndex={currentIndex}
          BGM={BGM}
        />
        <h2>
          {isPlaying ? "Playing:" : "Paused:"} {BGM[currentIndex].title}
        </h2>
      </div>
    </section>
  );
};

export default MusicPlayer;
