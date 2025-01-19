"use client";
import Image from "next/image";
import React from "react";
import screenfull from "screenfull";
import { useHotkeys } from "react-hotkeys-hook";

function Navbar() {
  const [isFullScreen, setIsFullScreen] = React.useState<boolean>(false);
  const iconSize: number = 20;

  // Monitor screenfull state
  React.useEffect(() => {
    if (screenfull.isEnabled) {
      const handleFullscreenChange = () => {
        setIsFullScreen(screenfull.isFullscreen);
      };

      screenfull.on("change", handleFullscreenChange);

      // Cleanup listener on component unmount
      return () => {
        screenfull.off("change", handleFullscreenChange);
      };
    }
  }, []);

  // Toggle fullscreen mode
  const toggleFullScreen = () => {
    if (screenfull.isEnabled) {
      if (screenfull.isFullscreen) {
        screenfull.exit();
      } else {
        screenfull.request();
      }
    }
  };

  // Hotkey to toggle fullscreen
  useHotkeys("f", () => toggleFullScreen());

  return (
    <nav className="py-6">
      <div className="container flex justify-between items-center">
        <h1>listening now</h1>
        <ul className="flex gap-4">
          <li className="link">
            <Image
              onClick={toggleFullScreen}
              className={`neon-lights transition-transform ${
                isFullScreen ? "" : "scale-x-[-1]"
              }`}
              src={isFullScreen ? "/minimize.png" : "/maximize.png"}
              alt={isFullScreen ? "minimize" : "maximize"}
              width={iconSize}
              height={iconSize}
            />
          </li>
          <li className="link">
            <Image
              className="neon-lights"
              src="/x.png"
              alt="x"
              width={22}
              height={22}
            />
          </li>
          <li className="link">
            <Image
              className="neon-lights"
              src="/heart.png"
              alt="heart"
              width={iconSize}
              height={iconSize}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
