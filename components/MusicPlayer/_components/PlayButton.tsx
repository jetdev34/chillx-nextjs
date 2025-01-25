import React from "react";
import Image from "next/image";
import ReactPlayer from "react-player/youtube";

type PlayButtonProps = {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  currentIndex: number;
  BGM: { title: string; url: string }[];
  volume: number; // New prop
};

const PlayButton: React.FC<PlayButtonProps> = ({
  isPlaying,
  setIsPlaying,
  currentIndex,
  BGM,
  volume,
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
          className="link neon-lights"
          src="/icons/pause.png"
          alt="Pause"
          width={iconSize}
          height={iconSize}
        />
      ) : (
        <Image
          onClick={togglePlay}
          className="link neon-lights"
          src="/icons/play.png"
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
        volume={volume} // Dynamic volume
        width="0"
        height="0"
      />
    </>
  );
};

export default PlayButton;
