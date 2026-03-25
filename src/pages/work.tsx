import { workData } from "../data/work";

export default function Work() {
  const work = workData;

  return (
    <div className="px-6 py-10">
      <p className="text-xl font-thin ml-10 mt-10">SCEN</p>

      <div className="flex flex-col">
        {work.map((item) => (
          <div className="grid grid-cols-3 my-6 ml-10" key={item.id}>
            <p className="text-2xl">{item.year}</p>
            <div className="flex flex-col">
              <p className="text-3xl mb-3">{item.workplace}</p>
              <p className="mb-3">{item.name}</p>
              <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
                maxime ullam quasi ipsum facilis provident, praesentium
                doloremque modi asperiores? A, est? Suscipit, dolor fuga ipsum
                omnis at velit culpa vel?
              </p>
            </div>
            <div className="">
              <img className="w-80" src={item.imageUrl} alt={item.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
