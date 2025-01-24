"use client";

import { useHotkeys } from "react-hotkeys-hook";
import { useEffect, useState } from "react";
import screenfull from "screenfull";

function useFullscreen() {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  useEffect(() => {
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

  return { isFullScreen, toggleFullScreen };
}

export default useFullscreen;
