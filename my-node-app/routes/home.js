const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('home', {
    pageTitle: 'Home',
    path: '/',
    isAuthenticated: req.session.isLoggedIn,
  });
});

module.exports = router;
