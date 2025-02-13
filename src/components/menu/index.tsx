export default function menu() {
  return (
    <div className="menu">
      <a href="/">
        <img src={"/home.png"} alt="home" />
      </a>
      <a href="/search">
        <img src={"/search.png"} />
      </a>
      <a href="/watch-list">
        <img src={"/watch-list.png"} />
      </a>
    </div>
  );
}
