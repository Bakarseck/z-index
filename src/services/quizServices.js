import prisma from '@/lib/prisma';

async function createQuiz(data) {
    return await prisma.quiz.create({ data });
}

async function getQuizzesByRubriqueId(rubriqueId) {
    return await prisma.quiz.findMany({
        where: { rubriqueId },
        include: { questions: true }
    });
}

async function updateQuiz(id, data) {
    return await prisma.quiz.update({ where: { id }, data });
}

async function deleteQuiz(id) {
    return await prisma.quiz.delete({ where: { id } });
}

export default {
    createQuiz,
    getQuizzesByRubriqueId,
    updateQuiz,
    deleteQuiz
};
