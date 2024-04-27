import prisma from "@/lib/prisma";

// Create a new course
async function createCourse(data) {
  return await prisma.course.create({ data });
}

// Get courses by Rubrique ID
async function getCoursesByRubriqueId(rubriqueId) {
  return await prisma.course.findMany({
    where: { rubriqueId }
  });
}

// Update a course
async function updateCourse(id, data) {
  return await prisma.course.update({
    where: { id },
    data
  });
}

// Delete a course
async function deleteCourse(id) {
  return await prisma.course.delete({ where: { id } });
}

const courseService = {
  createCourse,
  getCoursesByRubriqueId,
  updateCourse,
  deleteCourse
};

export default courseService;
