const express = require('express');
const app = express();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.set('views', require('path').join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.get("/", async(req, res) => {
  res.render('index.ejs', { message: `hello world!` });
});

app.get("/users", async(req, res) => {
  let users = await prisma.user.findMany();
  res.send({ status: 200, users });
});

app.listen(process.env.PORT || 80, process.env.HOST || '0.0.0.0', () => console.log(`live`));