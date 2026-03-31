export default function Contact() {
  return (
    <div className="my-auto p-3 rounded-md border border-black/10 bg-white shadow-lg">
      <h2 className="text-xl w-fit pb-6 md:text-3xl">Kontakta mig</h2>
      <div className="flex pb-8 items-center gap-4">
        <svg
          className=""
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
            d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
          />
        </svg>
        <a
          href="mailto:markustorechristensen@gmail.com"
          className="pl-3 underline"
        >
          markustorechristensen@gmail.com
        </a>
      </div>

      <div className="flex pb-8 items-center gap-4">
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
          />
        </svg>

        <a href="#" className="pl-3 hover:underline">
          +46738102142
        </a>
      </div>
    </div>
  );
}
