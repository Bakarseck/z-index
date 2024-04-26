import userService from '@/services/userService';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const { email } = req.query;
            const user = await userService.findUserByEmail(email);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}
