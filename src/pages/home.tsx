import { stageImages } from "../data/gallery";

export default function Home() {
  const heroImg = stageImages.find((img) => img.name === "hero");

  return (
    <section
      className="bg-[length:40%] bg-no-repeat h-screen w-full bg-right flex items-center justify-around"
      style={{ backgroundImage: `url(${heroImg?.src})` }}
    >
      <h2 className="text-3xl font-thin italic">Sångare & Skådespelare</h2>
      <div></div>
    </section>
  );
}
