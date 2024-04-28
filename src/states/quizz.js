// quizData.js
import { atom } from 'recoil';

export const quizDataState = atom({
    key: 'quizDataState',
    default: [
        {
            imageUrl: '/assets/aubergine.png',
            options: ['jaxatu bi', 'batanisé gi', 'yomb bi', 'ñambi'],
            answer: 'jaxatu bi'
        },
        {
            imageUrl: '/assets/oursin.png',
            options: ['beurri-jamm bi', 'dounxor bi', 'ñullu geej bi', 'soxor bi'],
            answer: 'soxor bi'
        },
        {
            imageUrl: '/assets/paon.png',
            options: ['tann bi', 'dounxor bi', 'jambaajoop bi', 'picc mi'],
            answer: 'jambaajoop bi'
        },
        {
            imageUrl: '/assets/hippopotamme.png',
            options: ['fasu geej bi', 'mbonat bi', 'sëriñël bi', 'léebër bi'],
            answer: 'fasu geej bi'
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
