const express = require('express');

const router = express.Router();

const users = [];

router.get('/users', (req,res,next) => {
    res.render('users', {pageTitle: 'Users', path: '/users', users: users} );
});

router.post('/users', (req, res, next) => {
    users.push({ title: req.body.title });
    res.redirect('/');
})

module.exports = router;