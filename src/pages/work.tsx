import { workData } from "../data/work";

export default function Work() {
  const work = workData;

  return (
    <div className="px-8">
      <h3 className="text-2xl ml-10 mt-10 font-thin">SCEN/TV/FILM</h3>
      <div className="flex flex-col">
        {work.map((item) => (
          <div
            className="grid grid-cols-1 m-6 font-thin md:grid-cols-3 md:gap-2"
            key={item.id}
          >
            <p className="md:text-xl italic">{item.year}</p>
            <div className="flex flex-col align-center w-auto">
              <p className="font-semibold mb-3 md:text-xl">
                {item.name} | {item.workplace}
              </p>
              <p className="hidden md:block">{item.about}</p>
            </div>

            <div className="md:flex md:items-start md:justify-end rounded-md overflow-hidden">
              <img
                className="w-full h-auto object-contain rounded-md"
                src={item.imageUrl}
                alt={item.name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
