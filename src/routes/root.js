const express = require('express');
const { checkPerm } = require('./util/auth');
const router = express.Router();

router.get(`/`, checkPerm, async(req, res) => {
  res.render(`index.ejs`);
});

module.exports = router;