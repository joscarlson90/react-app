import { stageImages } from "../data/gallery";

export default function About() {
  const youngImage = stageImages.young;

  return (
    <main className="ml-10 mr-10 p-6 font-thin">
      <h3 className="text-2xl mt-10 mb-10">VEM ÄR JAG?</h3>
      <section className="flex justify-between">
        <p className="w-170">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi maxime
          ullam quasi ipsum facilis provident, praesentium doloremque modi
          asperiores? A, est? Suscipit, dolor fuga ipsum omnis at velit culpa
          vel? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
          maxime ullam quasi ipsum facilis provident, praesentium doloremque
          modi asperiores? A, est? Suscipit, dolor fuga ipsum omnis at velit
          culpa vel? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Sequi maxime ullam quasi ipsum facilis provident, praesentium
          doloremque modi asperiores? A, est? Suscipit, dolor fuga ipsum omnis
          at velit culpa vel? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Sequi maxime ullam quasi ipsum facilis provident,
          praesentium doloremque modi asperiores? A, est? Suscipit, dolor fuga
          ipsum omnis at velit culpa vel? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Sequi maxime ullam quasi ipsum facilis
          provident, praesentium doloremque modi asperiores?
        </p>
        <p className="md:w-1/2 lg:w-2/5 md:ml-auto">
          <img
            src={youngImage.src}
            alt="Scenbild"
            className="w-full h-auto rounded-md"
          />
        </p>
      </section>
    </main>
  );
}
