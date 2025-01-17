import MusicPlayer from "@/components/MusicPlayer";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <MusicPlayer />
    </div>
  );
}
