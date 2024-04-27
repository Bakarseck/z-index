import prisma from "@/lib/prisma";

// Create a new challenge
async function createChallenge(data) {
  return await prisma.challenge.create({ data });
}

// Get challenges by User ID
async function getChallengesByUserId(userId) {
  return await prisma.challenge.findMany({
    where: { userId }
  });
}

// Update a challenge
async function updateChallenge(id, data) {
  return await prisma.challenge.update({
    where: { id },
    data
  });
}

// Delete a challenge
async function deleteChallenge(id) {
  return await prisma.challenge.delete({ where: { id } });
}

const challengeService =  {
  createChallenge,
  getChallengesByUserId,
  updateChallenge,
  deleteChallenge
};

export default challengeService;
