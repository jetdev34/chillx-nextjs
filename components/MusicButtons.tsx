import React, { useState } from "react";
import PlayButton from "./PlayButton";
import ShuffleButton from "./ShuffleButton";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import VolumeBar from "./VolumeBar";
import { useHotkeys } from "react-hotkeys-hook";
type Props = {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  handleNext: () => void;
  handlePrevious: () => void;
  currentIndex: number;
  BGM: { title: string; url: string }[];
};

const MusicButtons: React.FC<Props> = ({
  isPlaying,
  setIsPlaying,
  handleNext,
  handlePrevious,
  currentIndex,
  BGM,
}) => {
  // Handles the volume level
  const [volume, setVolume] = useState(0.5);
  useHotkeys("space", () => setIsPlaying(!isPlaying));
  useHotkeys("right", () => handleNext());
  useHotkeys("left", () => handlePrevious());
  useHotkeys("down", () => setVolume(volume - 0.1));
  useHotkeys("up", () => setVolume(volume + 0.1));

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <PlayButton
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          currentIndex={currentIndex}
          BGM={BGM}
          volume={volume}
        />
        <ShuffleButton />
        <PreviousButton onClick={handlePrevious} />
        <NextButton onClick={handleNext} />
        <VolumeBar volume={volume} setVolume={setVolume} />
      </div>
    </div>
  );
};

export default MusicButtons;
