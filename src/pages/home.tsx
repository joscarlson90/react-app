import { stageImages } from "../data/gallery";

export default function Home() {
  const heroImg = stageImages.find((img) => img.name === "hero");

  return (
    <section
      className="bg-cover h-screen w-150 bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImg?.src})` }}
    >
      <h1></h1>
    </section>
  );
}
