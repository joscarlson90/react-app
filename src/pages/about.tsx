import { stageImages } from "../data/gallery";

export default function About() {
  const youngImage = stageImages.young;

  return (
    <main className="ml-10 mr-10 mb-10 font-thin">
      <h3 className="text-2xl w-fit pb-4 pt-4">VEM ÄR JAG?</h3>
      <section>
        <p className="flex flex-col float-right md:flex-row-reverse">
          <img
            src={youngImage.src}
            alt="Scenbild"
            className="rounded-md md:ml-6 m-2 md:w-100 md:h-auto"
          />
          - Jag vill bli Spiderman när jag blir stor! <br />
          Andrahandsval tennisproffs. Det blir inte alltid som man tänkt sig.
          När jag upptäckte musiken - alltså musik som var mer än Smurfhits och
          Markoolio - skiftade mitt fokus. Jag började på Ytterbyskolans
          musikklasser och förstod att det var basist i Så ska det låta-bandet
          som var mitt kall i livet. Musiken tog mig vidare till
          musikalprogrammet på Mimers Hus gymnasium i Kungälv och vidare till
          Musikteaterskolan i Bjärnum, Balettakademien i Göteborg och slutligen
          Högskolan för Scen och Musik.
          <br />
          Det blev varken en framtid som Spindelman eller Så ska det låta-basist
          men däremot musikalartist på scener runt om i Sverige, skådespelare på
          tv och mängder av sånguppdrag vid bröllop, begravningar och fester.
          <br />
          Med bredden från att spela i coverband på Kungälvs allra bästa kroger
          (ja, jag sa det - Kungälvs bästa krogar) till att spela
          lustspelsoperett på Göteborgsoperan kan jag med stolthet definiera mig
          som mångsysslare inom musik och teater.
        </p>
        {/* <p className="h-auto w-auto md:w-1/2 lg:w-2/5 md:ml-auto"></p> */}
      </section>
    </main>
  );
}
