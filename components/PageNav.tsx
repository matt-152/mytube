import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function PageNav(props: JSX.HTMLAttributes<HTMLHeaderElement>) {
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
