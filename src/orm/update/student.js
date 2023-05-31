const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function updateStudent(id, updatedStudent) {
  return await prisma.student.update({
    where: { id },
    data: updatedStudent
  });
}

module.exports = { updateStudent };