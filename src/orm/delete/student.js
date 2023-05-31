const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function deleteStudent(id) {
  return await prisma.student.delete({
    where: { id }
  });
}

module.exports = { deleteStudent };