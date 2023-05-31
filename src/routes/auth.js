const express = require('express');
const router = express.Router();

const google = require('googleapis').google;
const config = require('../../creds.json');
const OAuth2 = google.auth.OAuth2;

router.get(`/`, async(req, res) => {
  let { error } = req.query;
  res.render('login.ejs', {
    error,
    generateAuthURL: () => {
      let authClient = new OAuth2(
        config.web.client_id,
        config.web.client_secret,
        config.web.redirect_uris[0]
      );

      return authClient.generateAuthUrl({ 
        access_type: 'offline',
        scope: config.scopes
      });
    }
  })
});

module.exports = router;