const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createUser(user) {
  return await prisma.user.create({
    data: user
  });
}

async function createUsers(users) {
  return await prisma.user.createMany({
    data: users
  });
}

module.exports = { createUser, createUsers };