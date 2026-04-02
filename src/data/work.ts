import { stageImages } from "./gallery";

export interface Work {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  workplace: string;
  year: string;
  about: string;
}

export const workData: Work[] = [
  {
    id: "1",
    name: "Det var en gång på Grand Hotel",
    role: "Kvartett/Storfursten",
    imageUrl: stageImages.grandhotel.src,
    workplace: "Göteborgsoperan",
    year: "2023",
    about:
      "Lustspelsoperett i två akter av Paul Abraham (1892-1960). Libretto Alfred Grünwald och Fritz Löhner-Beda efter en pjäs av Alfred Savoir. Ny svensk översättning av Fredrik Fischer och Linnea Sjunnesson. Gjorde rollen som Storfursten Peter Paul och barbershop-kvartett.",
  },
  {
    id: "2",
    name: "Börje - The Journey of a Legend",
    role: "Tommy Sandlin",
    imageUrl: stageImages.borje.src,
    workplace: "Warner Bros",
    year: "2023",
    about:
      "En svensk dramaserie på Viaplay i sex avsnitt som skildrar ishockeylegendaren Börje Salmings liv och karriär. Serien följer hans resa från Kiruna, via Brynäs, till att bli en pionjär i NHL med Toronto Maple Leafs. Spelade rollen som hockeytränaren Tommy Sandlin.",
  },
  {
    id: "3",
    name: "Kärlek skonar ingen",
    role: "US Tommy/Ensemble",
    imageUrl: stageImages.karlek.src,
    workplace: "Göteborgsoperan",
    year: "2021-2022",
    about:
      "Ett poetiskt och skitigt drömspel som utspelar sig på platser som Håkan Hellström för alltid skrivit in i Göteborgs stadskarta. Cover för rollen Tommy samt ensemble.",
  },
  {
    id: "4",
    name: "Oliver!",
    role: "Swing",
    imageUrl: stageImages.oliver.src,
    workplace: "Göteborgsoperan",
    year: "2019-2020",
    about:
      "Fredrik Benke Rydmans version av den klassiska Dickens-musikalen om Oliver Twist. Swing för samtliga manliga ensemblemedlemmar.",
  },
  {
    id: "5",
    name: "Something Rotten",
    role: "US Nigel & Shakespeare",
    imageUrl: stageImages.rotten.src,
    workplace: "Wermland Opera",
    year: "2018-2019",
    about:
      "Produktionen blev en härligt galen hyllning, drift och kärleksförklaring till allt vad musikal, broadway och Shakespeare är! Cover för Shakespeare, Nigel samt ensemble.",
  },
  {
    id: "6",
    name: "Tummelisa",
    role: "Svala",
    imageUrl: stageImages.svala.src,
    workplace: "Örebro Länsteater",
    year: "2017-2018",
    about:
      "Föreställningen, baserad på H.C. Andersens klassiska saga, fokuserade på mod och att ta makten över sitt eget liv. Den beskrevs som en generös musikal i stort format med färgstarka karaktärer och specialskriven musik. Rollen som Svalan",
  },
  {
    id: "7",
    name: "Bröderna Lejonhjärta",
    role: "Jonatan",
    imageUrl: stageImages.lejonhjarta.src,
    workplace: "Kristianstad Teater",
    year: "2016",
    about:
      "Astrid Lindgrens tidlösa historia om kärlek och mod! Berättelse handlar om lojalitet och motstånd, Brödrakärlek och konsten att våga fast man inte vågar! Rollen som Jonatan Lejonhjärta.",
  },
  {
    id: "8",
    name: "Ingvar, En musikalisk möbelsaga",
    role: "Matteus",
    imageUrl: stageImages.ikea2.src,
    workplace: "Teater Västernorrland",
    year: "2016",
    about:
      "Föreställningen var en fartfylld och hyllad samtidssatir om Ingvar Kamprad och IKEA, där ensemblen spelade instrument och dansade, vilket markerade återinvigningen av teatern. Roll som Matteus och bokhylla.",
  },
  {
    id: "9",
    name: "I love you, you're perfect, now change!",
    role: "Kapellmästare, pianist",
    imageUrl: stageImages.loveyou.src,
    workplace: "Lilla Beddinge Teater",
    year: "2016",
    about:
      "Föreställningen skildrar kärlek och relationer genom 23 olika karaktärer, från dejting till pensionärslivet, med en stor ensemble som möjliggjorde unika produktionsnummer. Kapellmästare/pianist samt musikalisk instuderare.",
  },
  {
    id: "10",
    name: "Doktor Zjivago",
    role: "Ensemble",
    imageUrl: stageImages.zjivago.src,
    workplace: "Malmö Opera",
    year: "2014-2015",
    about:
      "Musikalen Doktor Zjivago, baserad på Boris Pasternaks klassiska roman och med musik av Lucy Simon, handlar om fyra ungdomars uppväxt och liv i revolutionens Ryssland och den unga Sovjetstaten under tidigt 1900-tal. Roll i ensemble.",
  },
  {
    id: "11",
    name: "Miss Saigon",
    role: "Ensemble",
    imageUrl: stageImages.malmo.src,
    workplace: "Malmö Opera",
    year: "2013-2014",
    about:
      "Handlingen i Miss Saigon startar i slutskedet av den amerikanska ockupationen där den unge amerikanske soldaten Chris och Kim, sjuttonårig vietnamesisk barflicka, blir förälskade i varandra. När Saigon faller överger han henne. Roll i ensemble.",
  },
];
