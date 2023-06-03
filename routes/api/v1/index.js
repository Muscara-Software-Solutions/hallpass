const express = require('express');
const router = express.Router();

const users = require('./user');

router.get(`/`, async(req, res) => {
  res.send({ status: 200 });
});

router.use(`/users`, users);

module.exports = router;