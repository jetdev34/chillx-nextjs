export type MusicProps = {
  title: string;
  url: string;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  handlePlay: (url: string) => void;
};
