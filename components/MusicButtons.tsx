import React, { useState } from "react";
import PlayButton from "./PlayButton";
import ShuffleButton from "./ShuffleButton";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import VolumeBar from "./VolumeBar";

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

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <PlayButton
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          currentIndex={currentIndex}
          BGM={BGM}
          volume={volume} // Pass volume to PlayButton
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
