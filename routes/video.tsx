import { useSignal } from "@preact/signals";
import PageNav from "../components/PageNav.tsx";

export default function Video() {
  const count = useSignal(3);
  return (
    <main>
      <div class="Video" src=""/>
    </main>
  );
}
