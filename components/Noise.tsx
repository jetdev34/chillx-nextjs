import { useEffect, useState } from "react";
import { NOISE } from "@/lib/data";

function Noise() {
  const [currentGif, setCurrentGif] = useState<string>(NOISE[0].url);

  const getRandomGif = (exclude: string): string => {
    const availableGifs = NOISE.filter((gif) => gif.url !== exclude);
    const randomGif =
      availableGifs[Math.floor(Math.random() * availableGifs.length)];
    return randomGif.url;
  };

  useEffect(() => {
    setCurrentGif(getRandomGif(currentGif));
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-cover bg-center"
      style={{ backgroundImage: `url('${currentGif}')` }}
    ></div>
  );
}

export default Noise;
