import React from "react";
import PlayButton from "./PlayButton";
import ShuffleButton from "./ShuffleButton";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";

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
  return (
    <div className="flex gap-4">
      <PlayButton
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentIndex={currentIndex}
        BGM={BGM}
      />
      <ShuffleButton />
      <PreviousButton onClick={handlePrevious} />
      <NextButton onClick={handleNext} />
    </div>
  );
};

export default MusicButtons;
