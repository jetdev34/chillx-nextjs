import Image from "next/image";
import React from "react";

function PreviousButton() {
  return (
    <>
      <Image
        className="link scale-x-[-1]"
        src="/player.png"
        alt="shuffle"
        width={20}
        height={20}
      />
    </>
  );
}

export default PreviousButton;
