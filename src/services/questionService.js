import prisma from '@/lib/prisma';

// Create a new question
async function createQuestion(data) {
    return await prisma.question.create({ data });
}

// Get questions by Quiz ID
async function getQuestionsByQuizId(quizId) {
    return await prisma.question.findMany({
        where: { quizId }
    });
}

// Update a question
async function updateQuestion(id, data) {
    return await prisma.question.update({
        where: { id },
        data
    });
}

// Delete a question
async function deleteQuestion(id) {
    return await prisma.question.delete({ where: { id } });
}

export default {
    createQuestion,
    getQuestionsByQuizId,
    updateQuestion,
    deleteQuestion
};
