"use client";

import { useState } from "react";
import React from "react";
import Image from "next/image";
import { ICON_SIZE } from "@/lib/constants";
import BackgroundMusic from "@/components/ui/BackgroundMusic";
import { useBackgroundMusic } from "@/hooks/useBackgroundMusic"; // Import the custom hook

function ConfigSection() {
  const [isConfig, setIsConfig] = useState<boolean>(false);

  const rainSound = useBackgroundMusic("/sounds/rain.ogg");
  const windSound = useBackgroundMusic("/sounds/wind.wav");
  const fireSound = useBackgroundMusic("/sounds/fire.ogg");
  const seawaveSound = useBackgroundMusic("/sounds/seawave.wav");

  const toggleConfig = () => {
    setIsConfig(!isConfig);
  };

  return (
    <>
      <li className="link relative group">
        <Image
          onClick={toggleConfig}
          className="neon-lights-green"
          src="/icons/configuration.png"
          alt="config"
          width={ICON_SIZE}
          height={ICON_SIZE}
        />
        {!isConfig && (
          <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 hidden group-hover:block px-2 py-1 text-2xl neon-lights-green ">
            Config
          </span>
        )}
        {isConfig && (
          <div className="absolute -right-20 flex flex-col justify-center mt-2">
            <p className="text-sm neon-lights-green">bgm effects</p>
            <div className="border-t neon-lights-red w-full my-2"></div>
            <BackgroundMusic
              label="rain"
              isCheck={rainSound.isPlaying}
              noiseVolume={rainSound.volume}
              toggleChange={rainSound.toggleSound}
              handleVolumeChange={rainSound.handleVolumeChange}
            />
            <BackgroundMusic
              label="wind"
              isCheck={windSound.isPlaying}
              noiseVolume={windSound.volume}
              toggleChange={windSound.toggleSound}
              handleVolumeChange={windSound.handleVolumeChange}
            />
            <BackgroundMusic
              label="fire"
              isCheck={fireSound.isPlaying}
              noiseVolume={fireSound.volume}
              toggleChange={fireSound.toggleSound}
              handleVolumeChange={fireSound.handleVolumeChange}
            />
            <BackgroundMusic
              label="sea wave"
              isCheck={seawaveSound.isPlaying}
              noiseVolume={seawaveSound.volume}
              toggleChange={seawaveSound.toggleSound}
              handleVolumeChange={seawaveSound.handleVolumeChange}
            />
          </div>
        )}
      </li>
    </>
  );
}

export default ConfigSection;
