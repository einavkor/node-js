const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

const homeRoutes = require('./routes/home');
const usersRoutes = require('./routes/users');

app.use(homeRoutes);
app.use(usersRoutes);


app.listen(3000);
;