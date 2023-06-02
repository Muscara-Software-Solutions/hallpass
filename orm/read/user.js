const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getUser(id) {
  return await prisma.user.findFirst({
    where: { id }
  });
}

async function getUserEmail(email) {
  return await prisma.user.findFirst({
    where: { email }
  })
}

async function getUsers() {
  return await prisma.user.findMany();;
}

module.exports = { getUser, getUsers, getUserEmail };