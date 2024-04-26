import prisma from '@/lib/prisma';

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

export default {
    createRubrique,
    getRubriquesByUserId,
    updateRubrique,
    deleteRubrique
};
