"use client";

import React, { createContext, useState, useEffect, useContext } from "react";
import { GIF } from "@/lib/data";
import { useHotkeys } from "react-hotkeys-hook";

interface GifContextType {
  handleGifChange: () => void;
  setGifVisible: (visible: boolean) => void; // Function to control GIF visibility
}

const GifContext = createContext<GifContextType | undefined>(undefined);

export const useGifContext = () => {
  const context = useContext(GifContext);
  if (!context) {
    throw new Error("useGifContext must be used within GifProvider");
  }
  return context;
};

interface GifProviderProps {
  children: React.ReactNode;
}

const GifProvider: React.FC<GifProviderProps> = ({ children }) => {
  const [currentGif, setCurrentGif] = useState<string>(GIF[0].url);
  const [gifVisible, setGifVisible] = useState<boolean>(true); // State for GIF visibility

  const getRandomGif = (exclude: string): string => {
    const availableGifs = GIF.filter((gif) => gif.url !== exclude);
    const randomGif =
      availableGifs[Math.floor(Math.random() * availableGifs.length)];
    return randomGif.url;
  };

  useEffect(() => {
    const randomGif = getRandomGif(currentGif);
    setCurrentGif(randomGif);
  }, []);

  const handleGifChange = () => {
    const newGif = getRandomGif(currentGif);
    setCurrentGif(newGif);
  };

  useHotkeys("g", handleGifChange);

  return (
    <GifContext.Provider value={{ handleGifChange, setGifVisible }}>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: gifVisible ? `url('${currentGif}')` : "none",
        }}
      >
        {children}
      </div>
    </GifContext.Provider>
  );
};

export default GifProvider;
