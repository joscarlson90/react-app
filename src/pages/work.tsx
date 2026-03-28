import { workData } from "../data/work";

export default function Work() {
  const work = workData;

  return (
    <div className="px-6 py-10">
      <h3 className="text-2xl ml-10 mt-10 font-thin">SCEN</h3>

      <div className="flex flex-col mr-10">
        {work.map((item) => (
          <div className="grid grid-cols-2 my-6 ml-10 font-thin md:grid-cols-3" key={item.id}>
            <p className="text-xl italic">{item.year}</p>
            <div className="flex flex-col align-center w-auto">
              <p className="font-normal mb-3 md:text-xl">
                {item.workplace} | {item.name}
              </p>
              <p className="hidden md:block">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
                maxime ullam quasi ipsum facilis provident, praesentium
                doloremque modi asperiores? A, est? Suscipit, dolor fuga ipsum
                omnis at velit culpa vel?
              </p>
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
    </div>
  );
}
