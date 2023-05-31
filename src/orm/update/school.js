const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function updateSchool(id, updatedSchool) {
  return await prisma.school.update({
    where: { id },
    data: updateSchool
  });
}

module.exports = { updateSchool };