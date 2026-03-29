import { Link, Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-(family-name:<Quicksand>)">
      <header className="font-thin z-10 relative">
        <div className="flex flex-col items-center justify-between text-4xl p-5 pl-10 border-b-3 border-red-800 bg-stone-200 md:justify-between">
          <h1 className="text">Markus Christensen</h1>
          <h2 className="block md:hidden text-xl">
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

      <main className="flex-1 flex items-center justify-center">
        <Outlet />
      </main>

      <footer className="font-thin">
        <div className="flex flex-col items-center justify-center h-30 text-sm gap-5 p-5 border-t-3 border-red-800 bg-stone-200">
          <div className="text-center">© 2026 Markus Christensen</div>
          <div className="flex justify-center">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </footer>
    </div>
  );
}
