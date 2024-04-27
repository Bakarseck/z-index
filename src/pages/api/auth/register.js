import userService from "@/services/userService";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { email, password, username, firstName, lastName } = req.body;
      console.log(req.body);
      const user = await userService.registerUser(email, password, username, firstName, lastName);
      res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
