import { Link, Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <header className="grid font-thin ">
        <div className="flex flex-col items-center justify-between text-4xl p-5 pl-10 border-b-3 border-red-800 bg-stone-200 md:justify-between">
          <h1 className="text">Markus Christensen</h1>
          <h2 className="m-2 block md:hidden text-xl">
            Sångare & Skådespelare
          </h2>
          <div className="flex flex-row flex-wrap text-base gap-5 p-4">
            <Link to="/">HEM</Link>
            <Link to="/about">OM MIG</Link>
            <Link to="/work">CV</Link>
            <Link to="/gallery">MEDIA</Link>
            <Link to="/contact">KONTAKT</Link>
          </div>
        </div>
      </header>
      <Outlet />
      <footer className="font-thin">
        <div className="flex items-center justify-center h-30 text-sm gap-5 p-5 border-t-3 border-red-800 bg-stone-200">
          <div className="text-center">© Josefine Carlson</div>
        </div>
      </footer>
    </>
  );
}
