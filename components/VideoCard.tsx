import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function VideoCard(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div class="VideoCard">
      <a href="/video">
        <div class="VideoCard-thumbnail" style="background-color: #444444" />
      </a>
      <div class="VideoCard-info">
        <div class="VideoCard-info-left">
          <div class="VideoCard-mockProfilePic"/>
        </div>
        <div class="VideoCard-info-right">
          <a href="/video"><h4>My Awesome Video</h4></a>
          <p>Content Creator</p>
          <p>105K views - 5 hours ago</p>
        </div>
      </div>
    </div>
  );
}
