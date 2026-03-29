import { workData } from "../data/work";

export default function Work() {
  const work = workData;

  return (
    <div className="px-6">
      <h3 className="text-2xl ml-10 mt-10 font-thin">SCEN</h3>
      <div className="flex flex-col mr-10">
        {work.map((item) => (
          <div
            className="grid grid-cols-2 my-6 ml-10 font-thin md:grid-cols-3"
            key={item.id}
          >
            <p className="text-xl italic">{item.year}</p>
            <div className="flex flex-col align-center w-auto">
              <p className="font-semibold mb-3 md:text-xl">
                {item.workplace} | {item.name}
              </p>
              <p className="hidden md:block">{item.about}</p>
            </div>
            <div className="md:flex md:justify-center hidden md:block">
              <img
                className="w-80 rounded-md"
                src={item.imageUrl}
                alt={item.name}
              />
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-2xl ml-10 mt-10 font-thin">TV/FILM</h3>
      <div className="flex flex-col mr-10">
        {work.map((item) => (
          <div
            className="grid grid-cols-2 my-6 ml-10 font-thin md:grid-cols-3"
            key={""}
          >
            <p className="text-xl italic">ÅR</p>
            <div className="flex flex-col align-center w-auto">
              <p className="font-semibold mb-3 md:text-xl">
                ARBETSPLATS | NAMN/TITEL
              </p>
              <p className="hidden md:block">OM</p>
            </div>
            <div className="md:flex md:justify-center hidden md:block">
              <img className="w-80 rounded-md" src={""} alt={"ALTTEXT"} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
