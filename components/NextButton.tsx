import Image from "next/image";
import React from "react";

function NextButton() {
  return (
    <>
      <Image
        className="link"
        src="/player.png"
        alt="shuffle"
        width={20}
        height={20}
      />
    </>
  );
}

export default NextButton;
