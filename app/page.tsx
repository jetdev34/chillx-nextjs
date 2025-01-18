"use client";

import React, { useState } from "react";
import MusicPlayer from "@/components/MusicPlayer";
import Navbar from "@/components/Navbar";
import { GIF } from "@/lib/data";

export default function Home() {
  const [currentGif, setCurrentGif] = useState<string>(GIF[0].url);

  const handleGifChange = (newGif: string) => {
    setCurrentGif(newGif);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('${currentGif}')` }}
    >
      <Navbar />
      <MusicPlayer onGifChange={handleGifChange} />
    </div>
  );
}
