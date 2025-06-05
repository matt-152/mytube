import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
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
  );
}
