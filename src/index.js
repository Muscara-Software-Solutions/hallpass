const express = require('express');
const app = express();

const user = require('./routes/user');

app.use(express.static('public'));
app.set('views', require('path').join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use('/', user);

app.listen(process.env.PORT || 80, process.env.HOST || '0.0.0.0', () => console.log(`live`));