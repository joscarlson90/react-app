import { stageImages } from "../data/gallery";

const hidden = [
  stageImages.hero,
  stageImages.profil,
  stageImages.profil2,
  stageImages.young,
  stageImages.oliver2,
  stageImages.zjivago
];

export default function Gallery({}) {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-6">
      {Object.values(stageImages)
        .filter((img) => !hidden.includes(img))
        .map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt="Scenbilder"
            className="mb-4 w-full hover:opacity-90 transition w-m h-auto rounded-md"
          />
        ))}
    </div>
  );
}
