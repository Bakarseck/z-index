import { atom, selectorFamily } from 'recoil';

export const quizDataState = atom({
    key: 'quizDataState',
    default: [
        {
            imageUrl: '/assets/aubergine.png',
            options: ['jaxatu bi', 'batañse gi', 'yomb bi', 'ñambi'],
            answer: 'batañse gi'
        },
        {
            imageUrl: '/assets/oursin.png',
            options: ['beurri-jamm bi', 'dounxor bi', 'ñullu geej bi', 'soxoor bi'],
            answer: 'soxoor bi'
        },
        {
            imageUrl: '/assets/paon.png',
            options: ['tann bi', 'dounxor bi', 'jàmbajóop bi', 'picc mi'],
            answer: 'jàmbajóop bi'
        },
        {
            imageUrl: '/assets/hippopotamme.png',
            options: ['fasu geej bi', 'mbonat bi', 'sëriñël bi', 'léebër bi'],
            answer: 'léebër bi'
        },
        {
            imageUrl: '/assets/giraffe.png',
            options: ['njamala mi', 'léeg gi', 'saw mi', 'cud loss'],
            answer: 'njamala mi'
        },
        {
            imageUrl: '/assets/citrouille.png',
            options: ['leket bi', 'léeg gi', 'nadio bi', 'saranss bi'],
            answer: 'nadio bi'
        },
    ],
});

export const correctAnswerSelector = selectorFamily({
    key: 'correctAnswerSelector',
    get: (imageIndex) => ({ get }) => {
        const quizData = get(quizDataState);
        return quizData[imageIndex].answer;
    },
});