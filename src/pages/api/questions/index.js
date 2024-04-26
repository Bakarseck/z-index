import questionService from '@/services/questionService';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const question = await questionService.createQuestion(req.body);
            res.status(201).json(question);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    } else if (req.method === 'GET') {
        try {
            const { quizId } = req.query;
            const questions = await questionService.getQuestionsByQuizId(quizId);
            res.status(200).json(questions);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    } else {
        res.status(405).end();
    }
}
