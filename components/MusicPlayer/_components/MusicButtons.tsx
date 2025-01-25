import React, { useState } from "react";
import PlayButton from "./PlayButton";
import ShuffleButton from "./ShuffleButton";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import VolumeBar from "./VolumeBar";
import { useHotkeys } from "react-hotkeys-hook";
import { DEFAULT_VOLUME, KEY_SHORTCUTS } from "@/lib/constants";
type Props = {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  handleNext: () => void;
  handlePrevious: () => void;
  handleShuffle: () => void;
  currentIndex: number;
  BGM: { title: string; url: string }[];
};

const MusicButtons: React.FC<Props> = ({
  isPlaying,
  setIsPlaying,
  handleNext,
  handlePrevious,
  handleShuffle,
  currentIndex,
  BGM,
}) => {
  // Handles the volume level
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  useHotkeys(KEY_SHORTCUTS.play, () => setIsPlaying(!isPlaying));
  useHotkeys(KEY_SHORTCUTS.next, () => handleNext());
  useHotkeys(KEY_SHORTCUTS.previous, () => handlePrevious());
  useHotkeys(KEY_SHORTCUTS.shuffle, () => handleShuffle());
  useHotkeys(KEY_SHORTCUTS.volumeDown, () => setVolume(volume - 0.1));
  useHotkeys(KEY_SHORTCUTS.volumeUp, () => setVolume(volume + 0.1));

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
        <ShuffleButton onClick={handleShuffle} />
        <PreviousButton onClick={handlePrevious} />
        <NextButton onClick={handleNext} />
        <VolumeBar volume={volume} setVolume={setVolume} />
      </div>
    </div>
  );
};

export default MusicButtons;
