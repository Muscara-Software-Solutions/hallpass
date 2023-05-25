exports.checkPerm = function(req, res, next) {
  // future authorization
  if(true) {
    next();
  } else {
    res.send({ status: 403, message: `Forbidden` });
    return;
  }
};