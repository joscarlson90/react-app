import { useState } from "react";
import { stageImages } from "../data/gallery";

const hidden = [
  stageImages.hero,
  stageImages.profil,
  stageImages.profil2,
  stageImages.young,
  stageImages.oliver2,
  stageImages.zjivago,
  stageImages.borje,
];

type Image = {
  id: number;
  src: string;
  description: string;
  inGallery: boolean;
};

export default function Gallery({}) {
  const [showDescription, setshowDescription] = useState<Image | null>(null);

  return (
    <>
      <div className="relative z-50">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-6">
          {Object.values(stageImages)
            .filter((img) => !hidden.includes(img))
            .map((img) => (
              <div key={img.id} className="relative mb-4">
                <img
                  src={img.src}
                  alt="Produktionsbilder"
                  onClick={() =>
                    setshowDescription(showDescription === img ? null : img)
                  }
                  className={showDescription === img ? "opacity-30" : ""}
                />
                {showDescription === img && (
                  <div className="absolute transition inset-0 flex items-center justify-center text-black text-xl bg-opacity-20 rounded-md">
                    <p>{showDescription.description}</p>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
