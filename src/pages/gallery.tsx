import { stageImages } from "../data/gallery";

export default function Gallery({ gallery }: Props) {
  return (
    <div>
      <h2>Scenbilder</h2>
      {stageImages.map((img) => (
        <img key={img.src} src={img.src} alt="Scenbilder" width="100" />
      ))}
    </div>
  );
}
