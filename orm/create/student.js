const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createStudent(student) {
  return await prisma.student.create({
    data: student
  });
}

module.exports = { createStudent }