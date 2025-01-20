"use client";

import React, { useState, useEffect } from "react";
import MusicButtons from "./MusicButtons";
import { BGM } from "@/lib/data";
import { useGifContext } from "./GifProvider";

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const { handleGifChange } = useGifContext();

  useEffect(() => {
    setIsClient(true); // Ensure the component only renders on the client
  }, []);

  if (!isClient) {
    return null; // Prevent server-side rendering mismatches
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % BGM.length);
    handleGifChange(); // Change the GIF when moving to the next song
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? BGM.length - 1 : prevIndex - 1
    );
    handleGifChange(); // Change the GIF when moving to the previous song
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
