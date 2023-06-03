const express = require('express');
const router = express.Router();

const { getUsers, getUser } = require('../../../../orm/read/user');
const { getKey } = require('../../../../orm/read/key');

async function checkPerm(req, res, next) {
  let { apiKey } = req.query;
  if(!apiKey) {
    res.send({ status: 404, message: `Missing parameter: 'apiKey'` });
  } else {
    let isAllowed = await getKey(apiKey);

    if(isAllowed !== null) {
      next();
    } else {
      res.send({ status: 403, message: `apiKey provided is not valid. Did it expire?`});
    }
  }
}

router.get('/', checkPerm, async(req, res) => res.send({ status: 200, users: await getUsers() }));

router.get('/:id', async(req, res) => {
  let user = await getUser(req.params.id);
  res.send({ status: user == null ? 404 : 200, user: user == null ? [] : user });
});

module.exports = router;