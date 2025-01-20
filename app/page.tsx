import GifProvider from "@/components/GifProvider";
import MusicPlayer from "@/components/MusicPlayer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <GifProvider>
      <Navbar />
      <MusicPlayer />
    </GifProvider>
  );
}
