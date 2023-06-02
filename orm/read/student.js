const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getStudent(id) {
  return await prisma.student.findFirst({
    where: { id }
  });
}

async function getStudentSchool(id) {
  return await prisma.student.findMany({
    where: { school: id }
  })
}

module.exports = { getStudent, getStudentSchool };