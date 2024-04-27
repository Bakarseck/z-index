import rubriqueService from "@/services/rubriqueService";

export default async function handler(req, res) {
  switch (req.method) {
  case "POST":
    try {
      const { userId, title, description } = req.body;

      if (!userId) {
        return res.status(400).json({ message: "UserId is required" });
      }

      const rubrique = await rubriqueService.createRubrique({ title, description, userId });
      res.status(201).json(rubrique);
    } catch (error) {
      console.error("Error creating rubrique:", error);
      res.status(400).json({ message: error.message });
    }
    break;

  case "GET":
    try {
      const { userId } = req.query;
      let rubriques;
      if (userId) {
        rubriques = await rubriqueService.getRubriquesByUserId(+userId);
      } else {
        rubriques = await rubriqueService.getAllRubriques();
      }
      res.status(200).json(rubriques);
    } catch (error) {
      console.error("Error fetching rubriques:", error);
      res.status(500).json({ message: error.message });
    }
    break;

  default:
    res.status(405).json({ message: "Method not allowed" });
  }
}
