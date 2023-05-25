const express = require('express');
const app = express();

// Import routes
const user = require('./routes/user');
const root = require('./routes/root');

// Express configuration
app.set('views', require('path').join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.use('/', express.static(require('path').join(__dirname, 'public')));

// Route Initialization
app.use('/users', user);
app.use('/', root);

// Server Initialization
app.listen(process.env.PORT || 80, process.env.HOST || '0.0.0.0', () => console.log(`live`));