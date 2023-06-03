const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const { v4: uuidv4 } = require('uuid');

async function updateKey(key) {
  return await prisma.aPI_Key.update({
    where: { key },
    data: {
      key: uuidv4()
    }
  });
}

module.exports = { updateKey };