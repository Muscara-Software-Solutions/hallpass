const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function deleteKey(key) {
  return await prisma.aPI_Key.delete({
    where: { key }
  });
}

module.exports = { deleteKey };