import Image from "next/image";
import React from "react";

function ShuffleButton() {
  return (
    <>
      <Image
        className="link"
        src="/shuffle.png"
        alt="shuffle"
        width={20}
        height={20}
      />
    </>
  );
}

export default ShuffleButton;
