import { Link, Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="font-thin z-10 relative">
        <div className="flex flex-col items-center justify-between text-4xl p-5 pl-10 border-b-3 border-red-800 bg-stone-200 md:justify-between">
          <h1 className="text">Markus Christensen</h1>
          <h2 className=" block md:hidden text-xl">
            Sångare - Skådespelare - Musiker
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

        <main className="flex-1">
          <Outlet />
        </main>

        <footer className="font-thin">
          <div className="flex items-center justify-center h-30 text-sm gap-5 p-5 border-t-3 border-red-800 bg-stone-200">
            <div className="text-center">© 2026 Markus Christensen</div>
          </div>
        </footer>
    </div>
  );
}
