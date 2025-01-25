import Image from "next/image";
import React from "react";
import { useState } from "react";

type Props = {
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
};

function VolumeBar({ volume, setVolume }: Props) {
  // Handles the volume dragging increase or decrease
  const [isDragging, setIsDragging] = useState(false);

  // handles volume functionality
  const handleVolumeClick = (level: number) => {
    setVolume(level);
  };

  // #region handles dragging volume functionality
  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;

    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percentage = Math.min(Math.max(offsetX / rect.width, 0), 1); // Clamp between 0 and 1
    setVolume(percentage);
  };
  // #endregion

  return (
    <div
      className="flex items-center gap-1"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{ cursor: isDragging ? "grabbing" : "pointer" }}
    >
      {Array.from({ length: 10 }).map((_, i) => {
        const level = (i + 1) / 10;
        return (
          <Image
            key={i}
            className={`cursor-pointer ${
              volume >= level ? "opacity-100" : "opacity-40"
            }`}
            onClick={() => handleVolumeClick(level)}
            src="/or.png"
            alt={`Volume ${level * 100}%`}
            width={20}
            height={20}
          />
        );
      })}
    </div>
  );
}

export default VolumeBar;
