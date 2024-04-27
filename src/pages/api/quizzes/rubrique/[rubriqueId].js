import quizService from "@/services/quizService";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { rubriqueId } = req.query;
      const quizzes = await quizService.getQuizzesByRubriqueId(+rubriqueId);
      res.status(200).json(quizzes);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(405).end();
  }
}
