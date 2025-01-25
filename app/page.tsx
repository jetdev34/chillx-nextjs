import GifProvider from "@/components/GifProvider";
import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <GifProvider>
      <Navbar />
      <MusicPlayer />
    </GifProvider>
  );
}
