import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

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
      <div class="VideoCard">
        <div class="VideoCard-thumbnail" style="background-color: #444444" />
        <div class="VideoCard-info">
          <div class="VideoCard-info-left">
            <div/>
          </div>
          <div class="VideoCard-info-right">
            <h4>My Awesome Video</h4>
            <p>Content Creator</p>
            <p>105K views - 5 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}
