"use client";
import Image from "next/image";
import React from "react";
import screenfull from "screenfull";
import { useHotkeys } from "react-hotkeys-hook";

function Navbar() {
  const [isFullScreen, setIsFullScreen] = React.useState<boolean>(false);
  const [isAbout, setIsAbout] = React.useState<boolean>(false);

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

  const toggleAbout = () => {
    setIsAbout(!isAbout);
  };

  return (
    <nav className="py-6">
      <div className="container flex justify-between items-center">
        <h1 className="neon-lights-red">lofi beats</h1>
        <ul className="flex gap-4">
          <li className="link relative group">
            <Image
              onClick={toggleFullScreen}
              className={`neon-lights-green transition-transform ${
                isFullScreen ? "" : "scale-x-[-1]"
              }`}
              src={isFullScreen ? "/icons/minimize.png" : "/icons/maximize.png"}
              alt={isFullScreen ? "minimize" : "maximize"}
              width={iconSize}
              height={iconSize}
            />
            <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 hidden group-hover:block px-2 py-1 text-2xl neon-lights-green ">
              Fullscreen
            </span>
          </li>
          <li className="link relative group">
            <Image
              className="neon-lights-green"
              src="/icons/configuration.png"
              alt="config"
              width={iconSize}
              height={iconSize}
            />
            <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 hidden group-hover:block px-2 py-1 text-2xl neon-lights-green ">
              Config
            </span>
          </li>
          <li className="link relative group">
            <Image
              className="neon-lights-green"
              src="/icons/x.png"
              alt="x"
              width={iconSize}
              height={iconSize}
            />
            <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 hidden group-hover:block px-2 py-1 text-2xl neon-lights-green ">
              X{" "}
            </span>
          </li>
          <li className="link relative group">
            <Image
              className="neon-lights-green"
              src="/icons/clock.png"
              alt="pomodoro"
              width={iconSize}
              height={iconSize}
            />
            <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 hidden group-hover:block px-2 py-1 text-2xl neon-lights-green ">
              Pomodoro
            </span>
          </li>
          <li className="relative group">
            <Image
              onClick={toggleAbout}
              className="link neon-lights-green"
              src="/icons/heart.png"
              alt="heart"
              width={iconSize}
              height={iconSize}
            />
            {!isAbout && (
              <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 hidden group-hover:block px-2 py-1 text-2xl neon-lights-green ">
                About
              </span>
            )}
            {isAbout && (
              <div className="absolute right-1/2 p-2   mt-2 text-center">
                <div className="flex gap-2 items-center">
                  <p className="text-sm neon-lights-green">made by</p>
                  <a
                    className="neon-lights-red"
                    href="https://github.com/jetdev34"
                    target="_blank"
                  >
                    Jethro Alonzo
                  </a>
                </div>
                <div className="border-t neon-lights-red w-full my-2"></div>
                <span className="neon-lights-green ">key shortcut</span>
                <div className="flex gap-2">
                  <span className="neon-lights-red">←→</span>
                  <span className="neon-lights-green"> station</span>
                </div>
                <div className="flex gap-2">
                  <span className="neon-lights-red">↑↓</span>
                  <span className="neon-lights-green">volume</span>
                </div>
                <div className="flex gap-4 items-center ">
                  <span className="neon-lights-red">G</span>
                  <span className="neon-lights-green"> gif</span>
                </div>
                <div className="flex gap-4 items-center ">
                  <span className="neon-lights-red">F</span>
                  <span className="neon-lights-green">fullscreen</span>
                </div>
                <div className="flex gap-4 items-center ">
                  <span className="neon-lights-red">R</span>
                  <span className="neon-lights-green">shuffle</span>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
