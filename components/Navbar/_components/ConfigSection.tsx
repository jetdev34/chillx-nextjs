"use client";

import { useState } from "react";
import React from "react";
import Image from "next/image";
import { ICON_SIZE } from "@/lib/constants";
import BackgroundMusic from "@/components/ui/BackgroundMusic";
import { useBackgroundMusic } from "@/hooks/useBackgroundMusic"; // Import the custom hook
import { BACKGROUND_NOISE } from "@/lib/data";

function ConfigSection() {
  const [isConfig, setIsConfig] = useState<boolean>(false);

  const rainSound = useBackgroundMusic(BACKGROUND_NOISE[0].url);
  const windSound = useBackgroundMusic(BACKGROUND_NOISE[1].url);
  const fireSound = useBackgroundMusic(BACKGROUND_NOISE[2].url);
  const seawaveSound = useBackgroundMusic(BACKGROUND_NOISE[3].url);
  const forestSound = useBackgroundMusic(BACKGROUND_NOISE[4].url);
  const underTreeSound = useBackgroundMusic(BACKGROUND_NOISE[5].url);

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
            <BackgroundMusic
              label="forest"
              isCheck={forestSound.isPlaying}
              noiseVolume={forestSound.volume}
              toggleChange={forestSound.toggleSound}
              handleVolumeChange={forestSound.handleVolumeChange}
            />
            <BackgroundMusic
              label="rain under the tree"
              isCheck={underTreeSound.isPlaying}
              noiseVolume={underTreeSound.volume}
              toggleChange={underTreeSound.toggleSound}
              handleVolumeChange={underTreeSound.handleVolumeChange}
            />
          </div>
        )}
      </li>
    </>
  );
}

export default ConfigSection;
