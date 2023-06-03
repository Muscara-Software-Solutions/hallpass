const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createKey(user) {
  return await prisma.aPI_Key.create({
    data: {
      user
    }
  });
}

module.exports = { createKey }