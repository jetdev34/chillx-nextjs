/* ANCHOR 
  * group / group-hover :  used to define a parent group that allows you to apply styles to its child elements when the parent is in a specific state. It’s commonly paired with group-hover, group-focus, or other group-* variants to trigger styles on child elements based on the parent's state. 

  * scale-x-[-1] :  used to flip an element horizontally
*/

"use client";

// Hooks
import useFullscreen from "@/hooks/useFullscreen";
// Constants
import { ICON_SIZE } from "@/lib/constants";
// Components
import Image from "next/image";

function FullscreenSection() {
  // Logic to toggle fullscreen
  const { isFullScreen, toggleFullScreen } = useFullscreen();

  return (
    <li className="link relative group">
      <Image
        onClick={toggleFullScreen}
        className={`neon-lights-green transition-transform ${
          isFullScreen ? "" : "scale-x-[-1]"
        }`}
        src={isFullScreen ? "/icons/minimize.png" : "/icons/maximize.png"}
        alt={isFullScreen ? "minimize" : "maximize"}
        width={ICON_SIZE}
        height={ICON_SIZE}
      />
      <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 hidden group-hover:block px-2 py-1 text-2xl neon-lights-green ">
        Fullscreen
      </span>
    </li>
  );
}

export default FullscreenSection;
