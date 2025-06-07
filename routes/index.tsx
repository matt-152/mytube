import { useSignal } from "@preact/signals";
import VideoCard from "../components/VideoCard.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div>
      <header class="PageNav">
        <div class="PageNav-start">
            MyTube
        </div>
        <div class="PageNav-mid">
          <div class="PageNav-mid-search">
            <input type="text" placeholder="Search"></input>
            <button>Go</button>
          </div>
        </div>
        <div class="PageNav-end"></div>
      </header>
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
    </div>
  );
}
