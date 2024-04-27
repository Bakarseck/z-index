import prisma from "@/lib/prisma";

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

async function getAllQuizzes() {
  return await prisma.quiz.findMany();
}

const quizService = {
  createQuiz,
  getQuizzesByRubriqueId,
  updateQuiz,
  deleteQuiz,
  getAllQuizzes
};

export default quizService;
