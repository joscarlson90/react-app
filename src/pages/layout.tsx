import { Link, Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <header className="items-center grid font-thin">
        <h1 className="flex justify-center text-4xl p-10 border-b bg-stone-200">
          Markus Christensen
        </h1>
        <div className="flex justify-center gap-5 p-5">
          <Link to="/">Home</Link>
          <Link to="">Work</Link>
          <Link to="/">Gallery</Link>
          <Link to="/">About</Link>
        </div>
      </header>
      <Outlet />
    </>
  );
}
