const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function deleteUser(id) {
  return await prisma.user.delete({
    where: { id: parseInt(id) }
  });
}

module.exports = { deleteUser };