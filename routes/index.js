const express = require('express');
const router = express.Router();

const google = require('googleapis').google;
const OAuth2 = google.auth.OAuth2;

const api = require('./api');
const auth = require('./auth/');
const { getUserEmail } = require('../orm/read/user');
const { createUser } = require('../orm/create/user');

router.use('/login', auth);
router.use('/api', api);

router.get(`/`, 
  async (req, res) => {
    let login = false;
    if(req.session.userid) login = true;

    res.render(`index.ejs`, { login });
  }
);

router.get(`/dashboard`,
  async(req, res) => {
    res.render(`dashboard.ejs`, {
      passes: [
        {
          firstName: 'Kevin',
          lastName: 'Muscara',
          location: 'Upstairs Bathroom',
          today: 3,
          week: 12,
          semester: 34
        },
        {
          firstName: 'Austin',
          lastName: 'Smith',
          location: 'Guidance Office',
          today: 0,
          week: 11,
          semester: 17
        }
      ]
    });
  }
);

router.get(`/logout`,
  async(req, res) => {
    if(req.session.userid) {
      req.session.destroy();
    }
    res.redirect(`/`);
  }
);

router.get('/auth/callback',
  async(req, res) => {
    if (req.query.error) return res.send({ status: 500, error: req.query.error });

    let authClient = new OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      JSON.parse(process.env.REDIRECT_URIS)[0]
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
            req.session.regenerate((err) => {
              if(err) res.send({ status: 500, error: err });

              req.session.userid = user;

              req.session.save((err) => {
                if(err) res.send({ status: 500, error: err });

                res.redirect(`/`);
              })
            });
          } else {
            req.session.regenerate((err) => {
              if(err) res.send({ status: 500, error: err });

              req.session.userid = response;

              req.session.save((err) => {
                if(err) res.send({ status: 500, error: err });

                res.redirect(`/`);
              })
            });
          }
        });
      }
    });
  }
);

module.exports = router;