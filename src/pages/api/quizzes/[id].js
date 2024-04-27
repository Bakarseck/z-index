import quizService from "@/services/quizService";

export default async function handler(req, res) {
  const { query: { id }, method } = req;

  switch (method) {
  case "GET":
    try {
      const quiz = await quizService.getQuizzesByRubriqueId(parseInt(id));
      if (quiz) {
        res.status(200).json(quiz);
      } else {
        res.status(404).json({ message: "Quiz not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    break;

  case "PUT":
    try {
      const data = req.body;
      const updatedQuiz = await quizService.updateQuiz(parseInt(id), data);
      res.status(200).json(updatedQuiz);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    break;

  case "DELETE":
    try {
      await quizService.deleteQuiz(parseInt(id));
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    break;

  default:
    res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
