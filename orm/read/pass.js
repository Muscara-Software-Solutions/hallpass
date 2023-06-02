const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getPass(id) {
  return await prisma.pass.findFirst({
    where: { id }
  });
}

async function getPassStudent(id) {
  return await prisma.pass.findMany({
    where: { student: id }
  })
}

async function getPassSchool(id) {
  return await prisma.student.findMany({
    where: { school: id }
  });;
}

module.exports = { getPass, getPassSchool, getPassStudent };