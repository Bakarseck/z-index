import prisma from "@/lib/prisma";

async function createRubrique(data) {
  return await prisma.rubrique.create({ data });
}

async function getRubriquesByUserId(userId) {
  return await prisma.rubrique.findMany({ where: { userId } });
}

async function updateRubrique(id, data) {
  return await prisma.rubrique.update({ where: { id }, data });
}

async function deleteRubrique(id) {
  return await prisma.rubrique.delete({ where: { id } });
}

async function getRubriqueById(id) {
  return await prisma.rubrique.findUnique({ where: { id } });
}

async function getAllRubriques() {
  return await prisma.rubrique.findMany();
}


const rubriqueService = {
  createRubrique,
  getRubriquesByUserId,
  updateRubrique,
  deleteRubrique,
  getRubriqueById,
  getAllRubriques
};

export default rubriqueService;
    