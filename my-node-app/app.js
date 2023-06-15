const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log('In the users!');
    res.send('<h1>Hello from users!</h1>');
})

app.use('/',(req,res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
})

app.listen(3000);
;