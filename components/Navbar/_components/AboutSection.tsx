/* ANCHOR
 * group / group-hover :  used to define a parent group that allows you to apply styles to its child elements when the parent is in a specific state. It’s commonly paired with group-hover, group-focus, or other group-* variants to trigger styles on child elements based on the parent's state.
 */

"use client";

import { ICON_SIZE } from "@/lib/constants";
import Image from "next/image";
import { useState } from "react";

function AboutSection() {
  const [isAbout, setIsAbout] = useState<boolean>(false);

  // Displays on or off about section
  const toggleAbout = () => {
    setIsAbout(!isAbout);
  };

  return (
    <>
      <li className="relative group">
        <Image
          onClick={toggleAbout}
          className="link neon-lights-green"
          src="/icons/heart.png"
          alt="heart"
          width={ICON_SIZE}
          height={ICON_SIZE}
        />
        {!isAbout && (
          <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 hidden group-hover:block px-2 py-1 text-2xl neon-lights-green ">
            About
          </span>
        )}
        {isAbout && (
          <div className="absolute right-1/2 p-2 mt-2 text-center">
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
    </>
  );
}

export default AboutSection;
