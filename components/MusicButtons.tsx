import React from "react";
import PlayButton from "./PlayButton";
import ShuffleButton from "./ShuffleButton";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";

type Props = {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};

const MusicButtons: React.FC<Props> = ({ isPlaying, setIsPlaying }) => {
  return (
    <div className="flex gap-4">
      <PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <ShuffleButton />
      <PreviousButton />
      <NextButton />
    </div>
  );
};

export default MusicButtons;
