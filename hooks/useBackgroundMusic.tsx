import { useState } from "react";
import { useSound } from "use-sound";
import { DEFAULT_VOLUME } from "@/lib/constants";
export function useBackgroundMusic(soundFile: string) {
  const [volume, setVolume] = useState<number>(DEFAULT_VOLUME);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const [playSound, { stop, sound }] = useSound(soundFile, {
    loop: true,
    volume,
  });

  const toggleSound = () => {
    setIsPlaying((prev) => !prev);
    if (isPlaying) {
      stop();
    } else {
      playSound();
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (sound) sound.volume(newVolume);
  };

  return {
    isPlaying,
    volume,
    toggleSound,
    handleVolumeChange,
  };
}
