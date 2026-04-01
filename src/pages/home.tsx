import { stageImages } from "../data/gallery";

export default function Home() {
  const heroImg = stageImages.hero;

  return (
    <section className="flex flex-col md:flex-row items-stretch md:h-[70vh] lg:h-[90vh]">
      <article className="hidden flex-1 text-center md:text-left md:flex flex-col justify-center items-center">
        <h2 className="mb-5 text-2xl font-thin md:text-2xl lg:text-3xl">
          Sångare, Skådespelare & Musiker
        </h2>
        <h3 className="w-auto font-light"></h3>
      </article>

      <div className="flex-1">
        <img
          src={heroImg.src}
          alt="Scenbild"
          className="block w-full h-auto md:h-full object-cover lg:object-cover"
        />
      </div>
    </section>
  );
}
