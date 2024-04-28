import { atom } from "recoil";

export const crosswordClues = [
  {
    number: 1,
    question: "Titre que portait le roi du Cayor?",
    answer: "DAMEL",
    direction: "across",
    row: 1,
    col: 1
  },
  {
    number: 2,
    question: "Type de résistance exercée par Lat Dior Diop",
    answer: "ARMEE",
    direction: "down",
    row: 1,
    col: 2
  },
  {
    number: 3,
    question: "Appellation des personnes pratiquant l'animisme",
    answer: "CEDDO",
    direction: "across",
    row: 4,
    col: 1
  },
  {
    number: 4,
    question: "Langue parlée par le peuple du Cayor",
    answer: "WOLOF",
    direction: "down",
    row: 3,
    col: 5
  },
  {
    number: 5,
    question: "Action d'écrire du code informatique pour créer des programmes, des sites web et d'autres types de logiciels.",
    answer: "CODER",
    direction: "across",
    row: 6,
    col: 4
  },
  {
    number: 6,
    question: "Lat Dior est mort à cette bataille",
    answer: "DEKHLE",
    direction: "down",
    row: 6,
    col: 6
  },
  {
    number: 7,
    question: "Lat Dior s’opposa au colon contre la construction de ce type de chemin",
    answer: "FER",
    direction: "across",
    row: 7,
    col: 5
  },
  {
    number: 8,
    question: "Terminaison des verbes du premier groupe",
    answer: "ER",
    direction: "down",
    row: 6,
    col: 7
  }
];

export const crosswordState = atom({
  key: "crosswordState",
  default: crosswordClues.reduce((acc, clue) => {
    acc[clue.number] = {
      ...clue,
      isAnsweredCorrectly: false,
    };
    return acc;
  }, {}),
});

export const initialGrid = [
  ["1-1", "1-2", "1", "1", "1", "0", "0", "0", "0", "0", "0"],
  ["0", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "1", "0", "0", "1-4", "0", "0", "0", "0", "0", "0"],
  ["1-3", "1", "1", "1", "1", "0", "0", "0", "0", "0", "0"],
  ["0", "1", "0", "0", "1", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "1", "1", "1-6", "1-8", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "1-7", "1", "1", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "1", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "1", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "1", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "1", "0", "0", "0", "0", "0"],
];

export const crosswordGridState = atom({
  key: "crosswordinitialGridState",
  default: initialGrid,
});

export const scoreState = atom({
  key: "scoreState",
  default: 0,
});


