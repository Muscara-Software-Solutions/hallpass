const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function deletePass(id) {
  return await prisma.pass.delete({
    where: { id }
  });
}

module.exports = { deletePass };