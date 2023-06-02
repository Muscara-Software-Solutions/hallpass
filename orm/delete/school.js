const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function deleteSchool(id) {
  return await prisma.school.delete({
    where: { id }
  });
}

module.exports = { deleteSchool };