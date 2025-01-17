"use client";
import React, { useState, useEffect } from "react";
import MusicButtons from "./MusicButtons";
const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set client state to true once the component is mounted
  }, []);

  if (!isClient) {
    return null; // Prevent SSR mismatch by not rendering until on the client
  }

  return (
    <section className="fixed bottom-0 left-0 w-full py-6 ">
      <div className="container space-y-2">
        <MusicButtons isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        <h3>
          {isPlaying ? "!!!" : "..."} lofi hip hop radio 📚 beats to relax/study
          to
        </h3>
      </div>
    </section>
  );
};

export default MusicPlayer;
