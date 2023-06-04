const express = require('express');
const path = require('path');
const expressSession = require('express-session');
const MemoryStore = require('memorystore')(expressSession);
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

class PluginManager {
  constructor(app) {
    this.app = app;
  }

  registerAll = () => {
    this.setViews()
    this.setViewEngine();
    this.setTrustProxy();
    this.setPublic();
    this.setSession();
    this.setJSON();
    this.setURLEncoded();
    this.setCookieParser();
    this.setMorgan();
  }

  setViews = () =>        this.app.set("views", path.join(__dirname, '../views'));
  setViewEngine = () =>   this.app.set("view engine", "ejs");
  setTrustProxy = () =>   this.app.set("trust proxy", 1);
  setPublic = () =>       this.app.use(`/`, express.static(path.join(__dirname, '../public')));
  setJSON = () =>         this.app.use(express.json());
  setURLEncoded = () =>   this.app.use(express.urlencoded({ extended: true }));
  setCookieParser = () => this.app.use(cookieParser());
  setMorgan = () =>       this.app.use(morgan('tiny'));

  setSession = () => {
    this.app.use(expressSession({
      secret: process.env.SESSION_SECRET,
      saveUninitialized: true,
      cookie: { maxAge: 1000 * 60 * 60 * 24, secure: true },
      resave: false,
      store: new MemoryStore({
        checkPeriod: 1000 * 60 * 60 * 24
      })
    }));
  }
}

module.exports = PluginManager;