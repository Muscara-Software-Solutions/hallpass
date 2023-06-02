const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getSchool(id) {
  return await prisma.school.findFirst({
    where: { id }
  });
}

async function getSchoolOwner(id) {
  return await prisma.school.findFirst({
    where: { owner: id }
  })
}

async function getSchools() {
  return await prisma.school.findMany();;
}

module.exports = { getSchools, getSchoolOwner, getSchool };