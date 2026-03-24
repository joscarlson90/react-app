import { Link, Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <header className="items-center">
        <h1>Markus Christensen</h1>
        <Link to="/">Home</Link>
        <Link to="">Work</Link>
        <Link to="/">Gallery</Link>
      </header>
      <Outlet />
    </>
  );
}
