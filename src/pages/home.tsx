interface Props {
  performances: Performance[];
}

export default function Home(props: Props) {
  const performances = props.performances;

  return (
    <main className="grid font-thin">
      <h1 className="text-4xl p-10 border-b bg-stone-200">
        Markus Christensen
      </h1>
    </main>
  );
}
