import React from "react";

interface Props {
  label: string;
  isCheck: boolean;
  noiseVolume: number;
  toggleChange: () => void;
  handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function BackgroundMusic({
  label,
  isCheck,
  toggleChange,
  noiseVolume,
  handleVolumeChange,
}: Props) {
  return (
    <>
      <div className="flex gap-2 items-center">
        <label htmlFor={label}>{label}</label>
        <input
          id={label}
          type="checkbox"
          onChange={toggleChange}
          checked={isCheck}
        />
      </div>
      <div className="flex gap-2 items-center mt-2">
        <label htmlFor="volume" className="text-sm neon-lights-green">
          Volume
        </label>
        <input
          id="volume"
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={noiseVolume}
          onChange={handleVolumeChange}
          className="w-24"
        />
        <span className="text-sm neon-lights-green">
          {(noiseVolume * 100).toFixed(0)}%
        </span>
      </div>
    </>
  );
}

export default BackgroundMusic;
