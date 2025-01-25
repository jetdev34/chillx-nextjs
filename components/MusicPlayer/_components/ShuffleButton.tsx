import Image from "next/image";
import React from "react";

interface Props {
  onClick: () => void;
}
function ShuffleButton({ onClick }: Props) {
  return (
    <>
      <Image
        onClick={onClick}
        className="link"
        src="/icons/shuffle.png"
        alt="shuffle"
        width={20}
        height={20}
      />
    </>
  );
}

export default ShuffleButton;
