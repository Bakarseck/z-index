import { atom, selector } from "recoil";

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
    }
];

export const crosswordState = atom({
    key: 'crosswordState',
    default: crosswordClues.reduce((acc, clue) => {
        acc[clue.number] = {
            ...clue,
            isAnsweredCorrectly: false,
        };
        return acc;
    }, {}),
});

export const initialGrid = [
    ["1-1", "1-2", "1", "1", "1", "0", "0", "0", "0", "0"],
    ["0", "1", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "1", "0", "0", "1-4", "0", "0", "0", "0", "0"],
    ["1-3", "1", "1", "1", "1", "0", "0", "0", "0", "0"],
    ["0", "1", "0", "0", "1", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "1", "1", "1", "1", "1", "0", "0"],
    ["0", "0", "0", "0", "1", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
]

export const crosswordGridState = atom({
    key: 'crosswordinitialGridState',
    default: initialGrid,
});

export const scoreState = atom({
    key: 'scoreState',
    default: 0,
});


