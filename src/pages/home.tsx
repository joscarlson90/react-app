import { stageImages } from "../data/gallery";

export default function Home() {
  const heroImg = stageImages.hero;

  return (
    <section className="flex flex-col items-center justify-center w-full tablet:px-8 md:flex-row md:items-center md:justify-right">
      <article className="hidden md:absolute md:inset-0 md:flex flex-col justify-center items-center w-full md:w-auto md:translate-x-[-20%]">
        <h2 className="mt-50 mb-5 text-2xl font-thin md:text-4xl">
          Sångare, Skådespelare & Musiker
        </h2>
        <h3 className="w-auto font-light"></h3>
      </article>

      <div className="w-full md:w-1/2 lg:w-2/5 md:ml-auto">
        <img
          src={heroImg.src}
          alt="Scenbild"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
