"use client";

import React, { useState, useEffect } from "react";
import MusicButtons from "./MusicButtons";
import { BGM, GIF } from "@/lib/data";

interface MusicPlayerProps {
  onGifChange: (gifUrl: string) => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ onGifChange }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Avoid SSR mismatch
  }

  const getRandomGif = () => {
    const randomIndex = Math.floor(Math.random() * GIF.length);
    return GIF[randomIndex].url;
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % BGM.length);
    const newGif = getRandomGif();
    onGifChange(newGif);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? BGM.length - 1 : prevIndex - 1
    );
    const newGif = getRandomGif();
    onGifChange(newGif);
  };

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
