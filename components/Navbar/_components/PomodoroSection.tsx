/* ANCHOR
 * group / group-hover :  used to define a parent group that allows you to apply styles to its child elements when the parent is in a specific state. It’s commonly paired with group-hover, group-focus, or other group-* variants to trigger styles on child elements based on the parent's state.
 */

import Image from "next/image";
import React from "react";
import { ICON_SIZE } from "@/lib/constants";
function PomodoroSection() {
  return (
    <>
      <li className="link relative group">
        <Image
          className="neon-lights-green"
          src="/icons/clock.png"
          alt="pomodoro"
          width={ICON_SIZE}
          height={ICON_SIZE}
        />
        <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 hidden group-hover:block px-2 py-1 text-2xl neon-lights-green ">
          Pomodoro
        </span>
      </li>
    </>
  );
}

export default PomodoroSection;
