const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createPass(pass) {
  return await prisma.pass.create({
    data: pass
  });
}

module.exports = { createPass }