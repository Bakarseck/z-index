import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Create a new user
async function createUser(data) {
  return await prisma.user.create({ data });
}

// Find a user by email
async function findUserByEmail(email) {
  return await prisma.user.findUnique({ where: { email } });
}

// Update a user by ID
async function updateUser(id, data) {
  return await prisma.user.update({
    where: { id },
    data
  });
}

// Delete a user by ID
async function deleteUser(id) {
  return await prisma.user.delete({ where: { id } });
}

async function registerUser(email, password, username, firstName, lastName) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      username,
      firstName,
      lastName,
    }
  });
  return user;
}

// Fonction pour connecter un utilisateur
async function loginUser(email, password) {
  const user = await prisma.user.findUnique({
    where: { email }
  });
  if (!user || !await bcrypt.compare(password, user.password)) {
    throw new Error("Invalid login credentials");
  }
  const token = jwt.sign(
    { userId: user.id, username: user.username, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "8h" }
  );
  return { user, token };
}

const userService = {
  registerUser,
  loginUser,
  createUser,
  findUserByEmail,
  updateUser,
  deleteUser
};

export default userService;
