const { validationResult } = require('express-validator');

exports.getLoginPage = (req, res) => {
  res.render('login');
};

exports.getRegisterPage = (req, res) => {
  res.render('register', { errorMessage: undefined });
};

exports.login = (req, res) => {
  res.render('dashboard', { email: req.body.email });
}

exports.register = (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    res.status(422).render('register', { errorMessage: errors });
  }
  res.render('dashboard', { email: req.body.email });
};