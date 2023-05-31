const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function updateUser(id, updatedUser) {
  return await prisma.user.update({
    where: { id: parseInt(id) },
    data: updatedUser
  });
}

module.exports = { updateUser };