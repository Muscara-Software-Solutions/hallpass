const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getKey(key) {
  return await prisma.aPI_Key.findFirst({
    where: { key }
  });
}

async function getKeyUser(id) {
  return await prisma.aPI_Key.findMany({
    where: { user: id }
  })
}

module.exports = { getKey, getKeyUser };