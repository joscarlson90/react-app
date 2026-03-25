import { workData } from "../data/work";

export default function Work() {
  const work = workData;

  return (
    <div>
      <h2>Performance</h2>
      {work.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.role}</p>
          <p>{item.workplace}</p>
          <p>{item.year}</p>
        </div>
      ))}
    </div>
  );
}
