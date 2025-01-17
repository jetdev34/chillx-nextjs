import React from "react";
import Image from "next/image";
import ReactPlayer from "react-player/youtube";

type PlayButtonProps = {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  currentIndex: number;
  BGM: { title: string; url: string }[];
};

const PlayButton: React.FC<PlayButtonProps> = ({
  isPlaying,
  setIsPlaying,
  currentIndex,
  BGM,
}) => {
  const iconSize: number = 20;

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {isPlaying ? (
        <Image
          onClick={togglePlay}
          className="link"
          src="/pause.png"
          alt="Pause"
          width={iconSize}
          height={iconSize}
        />
      ) : (
        <Image
          onClick={togglePlay}
          className="link"
          src="/play.png"
          alt="Play"
          width={iconSize}
          height={iconSize}
        />
      )}

      {/* ReactPlayer updates dynamically based on currentIndex */}
      <ReactPlayer
        style={{ display: "none" }}
        url={BGM[currentIndex].url}
        playing={isPlaying}
        loop={true}
        muted={false}
        // Volumes ranges to 0 to 1(highest) only
        volume={1}
        width="0"
        height="0"
      />
    </>
  );
};

export default PlayButton;
