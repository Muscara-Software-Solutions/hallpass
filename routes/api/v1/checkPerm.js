const { getKey } = require('../../../orm/read/key');

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

module.exports = checkPerm