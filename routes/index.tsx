import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <header class="pagenav">
      <div class="pagenav-start">
          MyTube
      </div>
      <div class="pagenav-mid"></div>
      <div class="pagenav-end"></div>
    </header>
  );
}
