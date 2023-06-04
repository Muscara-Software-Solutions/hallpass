const express = require('express');
const router = express.Router();

const { getUsers, getUser } = require('../../../../orm/read/user');
const checkPerm = require('../checkPerm');
const { createUser } = require('../../../../orm/create/user');
const { updateUser } = require('../../../../orm/update/user');
const { deleteUser } = require('../../../../orm/delete/user');

router.get('/', checkPerm, async(req, res) => res.send({ status: 200, users: await getUsers() }));

router.get('/:id', checkPerm, async(req, res) => {
  let user = await getUser(req.params.id);
  res.send({ status: user == null ? 404 : 200, user: user == null ? [] : user });
});

router.post(`/`, checkPerm, async(req, res) => {
  const { email } = req.body;
  let user = await createUser({ email, role: 'default' });
  res.send({ status: 200, user });
});

router.put('/:id', checkPerm, async(req, res) => {
  const { email, role } = req.body;
  let user = await updateUser(req.params.id, { email, role });
  res.send({ status: 200, user });
});

router.delete('/:id', checkPerm, async (req, res) => {
  try {
    await deleteUser(req.params.id);
    res.send({ status: 200 });
  } catch (err) {
    res.send({ status: 400, error: err.meta.cause });
  }
});

module.exports = router;