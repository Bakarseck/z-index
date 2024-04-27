import quizService from "@/services/quizService";
import rubriqueService from "@/services/rubriqueService";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, rubriqueId } = req.body;

    try {
      const rubrique = await rubriqueService.getRubriqueById(+rubriqueId);

      if (!rubrique) {
        return res.status(404).json({ message: "Rubrique not found" });
      }

      const quiz = await quizService.createQuiz({
        title,
        rubriqueId,
      });
      res.status(201).json(quiz);
    } catch (error) {
      console.error("Error creating quiz:", error);
      res.status(500).json({ message: "Failed to create quiz", error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
