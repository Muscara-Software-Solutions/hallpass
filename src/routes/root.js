const express = require('express');
const router = express.Router();

const google = require('googleapis').google;
const config = require('../../creds.json');
const { getUserEmail } = require('../orm/read/user');
const { createUser } = require('../orm/create/user');
const OAuth2 = google.auth.OAuth2;

router.get(`/`, async (req, res) => res.render(`index.ejs`));

router.get('/auth/callback', async (req, res) => {
  if (req.query.error) return res.send({ status: 500, error: req.query.error });

  let authClient = new OAuth2(
    config.web.client_id,
    config.web.client_secret,
    config.web.redirect_uris[0]
  );

  authClient.getToken(req.query.code, (err, token) => {
    if (err) {
      res.send({ status: 500, ...err.response.data });
    }

    if(token !== null) {
      authClient.credentials = token;
      let service = google.people({ version: 'v1', auth: authClient });
      service.people.get({
        "resourceName": "people/me",
        "requestMask.includeField": "person.emailAddresses"
      }).then(async (data) => {
        let response = await getUserEmail(data.data.emailAddresses[0].value);
        if (response === null) {
          let newUser = {
            email: data.data.emailAddresses[0].value,
            role: 'default',
          }
  
          let user = await createUser(newUser);
          res.send(user);
        } else {
          // set user session
          res.send(response);
        }
      });
    }
  });

});

module.exports = router;