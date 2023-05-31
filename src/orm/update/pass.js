const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function updatePass(id, updatedPass) {
  return await prisma.pass.update({
    where: { id },
    data: updatedPass
  });
}

module.exports = { updatePass };