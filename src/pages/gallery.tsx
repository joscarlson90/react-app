import { stageImages } from "../data/gallery";

export default function Gallery({ gallery }: Props) {
  return (
    <div>
      <h2>Scenbilder</h2>
      {stageImages.map((img, index) => (
        <img key={index} src={img} alt="Scenbilder" width="100" />
      ))}
    </div>
  );
}
