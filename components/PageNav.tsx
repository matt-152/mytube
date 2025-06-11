export default function PageNav() {
  return (
    <header class="PageNav">
      <div class="PageNav-start">
          MyTube
      </div>
      <div class="PageNav-mid">
        <div class="PageNav-mid-search">
          <input type="text" placeholder="Search"></input>
          <button type="button">Go</button>
        </div>
      </div>
      <div class="PageNav-end"></div>
    </header>
  );
}
