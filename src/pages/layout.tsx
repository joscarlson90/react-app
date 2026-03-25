import { Link, Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <header className="items-center grid font-thin">
        <div className="">
          <h1 className="flex justify-between text-4xl p-4 border-b bg-stone-200">
            Markus Christensen
            <div className="flex text-base gap-5 p-5">
              <Link to="/">HEM</Link>
              <Link to="/">OM MIG</Link>
              <Link to="">CV</Link>
              <Link to="/">MEDIA</Link>
            </div>
          </h1>
        </div>
      </header>
      <Outlet />
    </>
  );
}
