export interface Work {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  workplace: string;
  year: number;
}

export const workData: Work[] = [
  {
    id: "1",
    name: "Det var en gång på Grand Hotel",
    role: "Kvartett/Storfursten",
    imageUrl: "",
    workplace: "Göteborgsoperan",
    year: 2023,
  },
  {
    id: "2",
    name: "Kärlek skonar ingen",
    role: "US Tommy/Ensemble",
    imageUrl: "",
    workplace: "Göteborgsoperan",
    year: 2022,
  },
  {
    id: "3",
    name: "Oliver!",
    role: "Swing",
    imageUrl: "",
    workplace: "Göteborgsoperan",
    year: 2020,
  },
  {
    id: "4",
    name: "Something Rotten",
    role: "US Nigel & Shakespeare",
    imageUrl: "",
    workplace: "Wermland Opera",
    year: 2019,
  },
  {
    id: "5",
    name: "Tummelisa",
    role: "Svala",
    imageUrl: "",
    workplace: "Örebro Länsteater",
    year: 2018,
  },
  {
    id: "6",
    name: "Bröderna Lejonhjärta",
    role: "Jonatan",
    imageUrl: "",
    workplace: "Kristianstad Teater",
    year: 2016,
  },
  {
    id: "7",
    name: "Ingvar, En musikalisk möbelsaga",
    role: "Matteus",
    imageUrl: "",
    workplace: "Teater Västernorrland",
    year: 2016,
  },
  {
    id: "8",
    name: "I love you, you're perfect, now change!",
    role: "Kapellmästare, pianist",
    imageUrl: "",
    workplace: "Lilla Beddinge Teater",
    year: 2016,
  },
  {
    id: "9",
    name: "Dr. Zhivago",
    role: "Ensemble",
    imageUrl: "",
    workplace: "Malmö Opera",
    year: 2015,
  },
  {
    id: "10",
    name: "Miss Saigon",
    role: "Ensemble",
    imageUrl: "",
    workplace: "Malmö Opera",
    year: 2014,
  },
];
