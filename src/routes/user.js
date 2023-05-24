const { PrismaClient } = require('@prisma/client');
const express = require('express');
const router = express.Router();
const prisma = new PrismaClient();

router.get('/', async(req, res) => res.send({ status: 200, users: await prisma.user.findMany() }));

module.exports = router;