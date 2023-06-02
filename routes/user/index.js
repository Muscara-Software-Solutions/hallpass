const express = require('express');
const { getUsers, getUser } = require('../../orm/read/user');
const router = express.Router();

router.get('/', async(req, res) => {
  res.send({ status: 200, users: await getUsers() });
});

router.get('/:id', async(req, res) => {
  let user = await getUser(req.params.id);
  res.send({ status: user == null ? 404 : 200, user: user == null ? [] : user });
})

module.exports = router;