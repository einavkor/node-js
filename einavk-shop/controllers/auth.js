const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  //   const isLoggedIn = req
  //     .get('Cookie')
  //     .split(';')[1]
  //     .trim()
  //     .split('=')[1] === 'true';
  console.log(req.session);
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('64bacc5af7c23fec12a9143c')
    .then((user) => {
      req.session.user = user; // mongoose will take the id from the user object
      req.session.isLoggedIn = true;
      res.redirect('/');
    })
    // eslint-disable-next-line no-console
    .catch((err) => console.log(err));
  req.session.isLoggedIn = true;
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    // eslint-disable-next-line no-console
    console.log(err);
    res.redirect('/');
  });
};
