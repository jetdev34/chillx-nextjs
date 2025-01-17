"use client";
import Image from "next/image";
import React, { useEffect } from "react";

function Navbar() {
  const [isFullScreen, setIsFullScreen] = React.useState<boolean>(false);
  const iconSize: number = 20;

  const goFullScreen = () => {
    const doc = document.documentElement as HTMLElement; // Target the <html> element
    if (doc.requestFullscreen) {
      doc.requestFullscreen();
    } else if (doc.mozRequestFullScreen) {
      // For Firefox
      doc.mozRequestFullScreen();
    } else if (doc.webkitRequestFullscreen) {
      // For Chrome, Safari, and Opera
      doc.webkitRequestFullscreen();
    } else if (doc.msRequestFullscreen) {
      // For IE/Edge
      doc.msRequestFullscreen();
    }
  };

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      // For Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      // For Chrome, Safari, and Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      // For IE/Edge
      document.msExitFullscreen();
    }
  };

  // Handle fullscreen state change
  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  const toggleFullScreen = () => {
    if (isFullScreen) {
      exitFullScreen();
    } else {
      goFullScreen();
    }
    setIsFullScreen((prevState) => !prevState);
  };

  return (
    <nav className="py-6">
      <div className="container flex justify-between items-center">
        <h1>listening now</h1>
        <ul className="flex gap-4">
          <li className="link">
            <Image
              onClick={toggleFullScreen}
              className="neon-lights"
              src={isFullScreen ? "/minimize.png" : "/maximize.png"}
              alt={isFullScreen ? "minimize" : "maximize"}
              width={iconSize}
              height={iconSize}
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
