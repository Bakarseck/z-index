import rubriqueService from '@/services/rubriqueService';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const rubrique = await rubriqueService.createRubrique({ ...req.body, userId: req.user.id });
            res.status(201).json(rubrique);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    } else {
        res.status(405).end();
    }
}
