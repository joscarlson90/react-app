import { stageImages } from "./gallery";

export interface Work {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  workplace: string;
  year: string;
}

export const workData: Work[] = [
  {
    id: "1",
    name: "Det var en gång på Grand Hotel",
    role: "Kvartett/Storfursten",
    imageUrl: stageImages.grandhotel.src,
    workplace: "Göteborgsoperan",
    year: "2023",
  },
  {
    id: "2",
    name: "Kärlek skonar ingen",
    role: "US Tommy/Ensemble",
    imageUrl: stageImages.karlek.src,
    workplace: "Göteborgsoperan",
    year: "2021-2022",
  },
  {
    id: "3",
    name: "Oliver!",
    role: "Swing",
    imageUrl: stageImages.oliver.src,
    workplace: "Göteborgsoperan",
    year: "2019-2020",
  },
  {
    id: "4",
    name: "Something Rotten",
    role: "US Nigel & Shakespeare",
    imageUrl: stageImages.rotten.src,
    workplace: "Wermland Opera",
    year: "2018-2019",
  },
  {
    id: "5",
    name: "Tummelisa",
    role: "Svala",
    imageUrl: stageImages.svala.src,
    workplace: "Örebro Länsteater",
    year: "2017-2018",
  },
  {
    id: "6",
    name: "Bröderna Lejonhjärta",
    role: "Jonatan",
    imageUrl: stageImages.lejonhjarta.src,
    workplace: "Kristianstad Teater",
    year: "2016",
  },
  {
    id: "7",
    name: "Ingvar, En musikalisk möbelsaga",
    role: "Matteus",
    imageUrl: stageImages.ikea2.src,
    workplace: "Teater Västernorrland",
    year: "2016",
  },
  {
    id: "8",
    name: "I love you, you're perfect, now change!",
    role: "Kapellmästare, pianist",
    imageUrl: "",
    workplace: "Lilla Beddinge Teater",
    year: "2016",
  },
  {
    id: "9",
    name: "Doktor Zjivago",
    role: "Ensemble",
    imageUrl: stageImages.zjivago.src,
    workplace: "Malmö Opera",
    year: "2014-2015",
  },
  {
    id: "10",
    name: "Miss Saigon",
    role: "Ensemble",
    imageUrl: stageImages.malmo.src,
    workplace: "Malmö Opera",
    year: "2013-2014",
  },
];
