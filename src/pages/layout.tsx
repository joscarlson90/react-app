import { useState } from "react";
import { Link, Outlet } from "react-router";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-(family-name:<Quicksand>)">
      <header className="font-thin z-10 bg-stone-200">
        <button className="md:hidden text-3xl m-2" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        <div className="flex flex-col items-center justify-between pb-3 text-4xl border-b-4 border-red-800 md:justify-between md:p-10">
          <h1 className="text-2xl md:font-thin md:text-4xl">
            Markus Christensen
          </h1>

          <h2 className="block md:hidden text-sm p-3">
            Sångare - Skådespelare - Musiker
          </h2>

          <div className="hidden md:flex flex-row flex-wrap text-base gap-5 md:pt-3">
            <Link
              className="transition-all duration-300 hover:text-black hover:-translate-y-1"
              to="/"
            >
              HEM
            </Link>
            <Link
              className="transition-all duration-300 hover:text-black hover:-translate-y-1"
              to="/about"
            >
              OM MIG
            </Link>
            <Link
              className="transition-all duration-300 hover:text-black hover:-translate-y-1"
              to="/work"
            >
              CV
            </Link>
            <Link
              className="transition-all duration-300 hover:text-black hover:-translate-y-1"
              to="/gallery"
            >
              MEDIA
            </Link>
            <Link
              className="transition-all duration-300 hover:text-black hover:-translate-y-1"
              to="/contact"
            >
              KONTAKT
            </Link>
          </div>

          {isOpen && (
            <div className="flex flex-row text-base gap-5 md:pt-3">
              <Link
                className="transition-all duration-300 hover:text-black hover:-translate-y-1"
                to="/"
              >
                HEM
              </Link>
              <Link
                className="transition-all duration-300 hover:text-black hover:-translate-y-1"
                to="/about"
              >
                OM MIG
              </Link>
              <Link
                className="transition-all duration-300 hover:text-black hover:-translate-y-1"
                to="/work"
              >
                CV
              </Link>
              <Link
                className="transition-all duration-300 hover:text-black hover:-translate-y-1"
                to="/gallery"
              >
                MEDIA
              </Link>
              <Link
                className="transition-all duration-300 hover:text-black hover:-translate-y-1"
                to="/contact"
              >
                KONTAKT
              </Link>
            </div>
          )}
        </div>
      </header>

      <main className="flex flex-col flex-1 w-full">
        <Outlet />
      </main>

      <footer className="font-thin">
        <div className="flex flex-col items-center justify-center h-30 text-sm gap-2 border-t-4 border-red-800 bg-stone-200">
          <div className="text-center">© 2026 Markus Christensen</div>
          <div className="flex justify-center">
            <a href="https://www.instagram.com/mackisen?igsh=OGQ1NXI5ZGR6NTlm">
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
                  fillRule="evenodd"
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="https://www.facebook.com/markus.christensen.96">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div className="text-center italic text-xs">
            Design by Josefine Carlson
          </div>
        </div>
      </footer>
    </div>
  );
}
