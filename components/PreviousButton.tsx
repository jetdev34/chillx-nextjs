import Image from "next/image";
import React from "react";

type Props = {
  onClick: () => void;
};

export const PreviousButton: React.FC<Props> = ({ onClick }) => (
  <>
    <Image
      onClick={onClick}
      className="link scale-x-[-1]"
      src="/player.png"
      alt="shuffle"
      width={20}
      height={20}
    />
  </>
);

export default PreviousButton;
