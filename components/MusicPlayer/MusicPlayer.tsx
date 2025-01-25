"use client";

import React, { useState, useEffect } from "react";
import MusicButtons from "./_components/MusicButtons";
import { BGM } from "@/lib/data";
import { useGifContext } from "../GifProvider";
import Noise from "../ui/Noise";
import useSound from "use-sound";
import { DEFAULT_VOLUME, NOISE_SOUND } from "@/lib/constants";
const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showNoise, setShowNoise] = useState(false); // State for noise visibility
  const [play] = useSound(NOISE_SOUND, {
    volume: DEFAULT_VOLUME,
  });

  const { handleGifChange, setGifVisible } = useGifContext();

  useEffect(() => {
    setIsClient(true); // Ensure the component only renders on the client
  }, []);

  if (!isClient) {
    return null; // Prevent server-side rendering mismatches
  }

  // Helper function to show noise briefly
  const triggerNoise = () => {
    setShowNoise(true); // Show the noise GIF
    setGifVisible(false); // Hide the lofi GIF
    play();
    setTimeout(() => {
      setShowNoise(false); // Hide the noise GIF
      setGifVisible(true); // Show the lofi GIF again
    }, 300); // Adjust the duration to your noise GIF length
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % BGM.length);
    handleGifChange();
    triggerNoise(); // Show noise on button press
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? BGM.length - 1 : prevIndex - 1
    );
    handleGifChange();
    triggerNoise(); // Show noise on button press
  };

  const handleShuffle = () => {
    const randomIndex = Math.floor(Math.random() * BGM.length);
    handleGifChange();
    setCurrentIndex(randomIndex);
    triggerNoise(); // Show noise on button press
  };

  return (
    <section className="fixed bottom-0 left-0 w-full py-6">
      <div className="container space-y-2 neon-lights-green">
        <MusicButtons
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          handleShuffle={handleShuffle}
          currentIndex={currentIndex}
          BGM={BGM}
        />
        <h2 className="neon-lights-green">
          {isPlaying ? "Playing:" : "Paused:"} {BGM[currentIndex].title}
        </h2>
      </div>

      {/* Noise visibility controlled here */}
      {showNoise && <Noise />}
    </section>
  );
};

export default MusicPlayer;
