const express = require('express');
const router = express.Router();

const google = require('googleapis').google;
const OAuth2 = google.auth.OAuth2;

router.get(`/`, async(req, res) => {
  let { error } = req.query;
  res.render('login.ejs', {
    error,
    generateAuthURL: () => {
      let authClient = new OAuth2(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        JSON.parse(process.env.REDIRECT_URIS)[0]
      );

      return authClient.generateAuthUrl({ 
        access_type: 'offline',
        scope: ["https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/user.emails.read"]
      });
    }
  })
});

module.exports = router;