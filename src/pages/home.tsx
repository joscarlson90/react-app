import { stageImages } from "../data/gallery";

export default function Home() {
  const heroImg = stageImages.hero;

  return (
    <section className="flex flex-1">
      <article className="hidden flex-1 md:flex flex-col justify-center items-center">
        <h2 className="mb-5 text-2xl font-thin md:text-2xl lg:text-3xl">
          Sångare, Skådespelare & Musiker
        </h2>
        <h3 className="w-auto font-light"></h3>
      </article>

      <div className="w-full h-full flex-1">
        <img
          src={heroImg.src}
          alt="Scenbild"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
