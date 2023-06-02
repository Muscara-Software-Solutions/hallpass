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
    this.log("Registering plugins...");

    this.setViews()
    this.setViewEngine();
    this.setTrustProxy();

    this.setPublic();
    this.setSession();
    this.setJSON();
    this.setURLEncoded();
    this.setCookieParser();
    this.setMorgan();

    this.log(`Success: All Plugins Registered`);
  }

  setViews = () => { 
    this.app.set("views", path.join(__dirname, '../views'));
    this.log(`Views path configured.`);
  }
  setViewEngine = () => {
    this.app.set("view engine", "ejs");
    this.log(`View engine configured.`);
  }

  setTrustProxy = () => {
    this.app.set("trust proxy", 1);
    this.log(`Trust proxy configured.`);
  }

  setPublic = () => {
    this.app.use(`/`, express.static(path.join(__dirname, '../public')));
    this.log(`Public path configured.`);
  }

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
    
    this.log(`Session plugin configured.`);
  }

  setJSON = () => {
    this.app.use(express.json());
    this.log(`Express JSON handler configured.`);
  }

  setURLEncoded = () => {
    this.app.use(express.urlencoded({ extended: true }));
    this.log(`URL Encoding configured.`);
  }

  setCookieParser = () => {
    this.app.use(cookieParser());
    this.log(`Cookie Parser Plugin configured.`);
  }
  
  setMorgan = () => {
    this.app.use(morgan('tiny'));
    this.log(`Morgan Plugin configured.`);
  }

  log = (message) => console.log(`[Plugin Manager] - ${message}`);
}

module.exports = PluginManager;