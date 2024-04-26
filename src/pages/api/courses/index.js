import courseService from '@/services/courseService';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const course = await courseService.createCourse(req.body);
            res.status(201).json(course);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    } else if (req.method === 'GET') {
        try {
            const { rubriqueId } = req.query;
            const courses = await courseService.getCoursesByRubriqueId(rubriqueId);
            res.status(200).json(courses);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    } else {
        res.status(405).end();
    }
}
