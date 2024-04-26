import userService from "@/services/userServices";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { email, password } = req.body;
            const { user, token } = await userService.loginUser(email, password);
            res.status(200).json({ message: "Login successful", user, token });
        } catch (error) {
            res.status(401).json({ message: error.message });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
