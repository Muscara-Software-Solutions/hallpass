const express = require('express');
const app = express();
const MemoryStore = require('memorystore')(require('express-session'));

// Import routes
const user = require('./routes/user');
const root = require('./routes/root');
const auth = require('./routes/auth');

// Express configuration
app.set('views', require('path').join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.set('trust proxy', 1);
app.use('/', express.static(require('path').join(__dirname, 'public')));
app.use(require('express-session')(
  { 
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24, secure: true },
    resave: false,
    store: new MemoryStore({
      checkPeriod: 1000 * 60 * 60 * 24
    })
  }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('cookie-parser')());

// Route Initialization
app.use('/users', user);
app.use('/login', auth);
app.use('/', root);

// Server Initialization
app.listen(process.env.PORT || 80, process.env.HOST || '0.0.0.0', () => console.log(`live`));