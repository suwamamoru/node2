const { validationResult } = require("express-validator");

exports.respondLogin = (req, res) => {
  res.render('login');
};

exports.respondRegister = (req, res) => {
  res.render('register', { errorMessage: '' });
};

exports.respondDashboard = (req, res) => {
  if(req.headers.referer !== 'http://localhost:3000/login') {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      const newErrors = {};
      errors.errors.forEach((err, index) => {
        if (err.param.includes("name")) {
          newErrors.name = "Nameを入力してください。";
        } else if (err.param.includes("email")) {
          newErrors.email = "有効なEmail Addressを入力してください。";
        } else if (err.param.includes("password")) {
          newErrors.password = "Passwordは7文字以上で入力してください。";
        } else if (err.param.includes("confirmPassword")) {
          newErrors.confirmPassword = "PasswordとConfirm Passwordを一致させてください。";
        }
      });
      res.render('register', {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        errorMessage: newErrors
      });
    }
  }
  res.render('dashboard', {
    email: req.body.email,
    password: req.body.password
  });
};
