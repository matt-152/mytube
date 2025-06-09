import { useSignal } from "@preact/signals";
import VideoCard from "../components/VideoCard.tsx";
import PageNav from "../components/PageNav.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <main>
      <div className="VideoGrid">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </main>
  );
}
