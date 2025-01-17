import Image from "next/image";
import React from "react";

type Props = {
  onClick: () => void;
};

export const NextButton: React.FC<Props> = ({ onClick }) => (
  <>
    <Image
      onClick={onClick}
      className="link"
      src="/player.png"
      alt="shuffle"
      width={20}
      height={20}
    />
  </>
);

export default NextButton;
