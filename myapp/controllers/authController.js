const { validationResult } = require("express-validator");
const { validator } = require('../models/validator');
const { loginValidator } = require('../models/loginValidator');
const { registerValidator } = require('../models/registerValidator');

exports.respondLogin = (req, res) => {
  res.render('login');
};

exports.respondRegister = (req, res) => {
  res.render('register');
};

// 3. validatorの条件分岐を行い処理する。
exports.respondDashboard = (req, res) => {
  if(req.headers.referer === 'http://localhost:3000/login') {
    loginValidator();
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      const newErrors = {};
      errors.errors.forEach((err, index) => {
        if (err.param.includes("email")) {
          newErrors.email = "有効なEmail Addressを入力してください。";
        } else if (err.param.includes("password")) {
          newErrors.password = "Passwordは7文字以上で入力してください。";
        }
      });
      return res.status(422).json(newErrors);
    }
    res.render('dashboard', {
      email: req.body.email,
      password: req.body.password
    });
  } else if(req.headers.referer === 'http://localhost:3000/register') {
    registerValidator();
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      const newErrors = {};
      errors.errors.forEach((err, index) => {
        if (err.param.includes("name")) {
          newErrors.name = "名前を入力してください。";
        } else if (err.param.includes("email")) {
          newErrors.email = "有効なEmail Addressを入力してください。";
        } else if (err.param.includes("password")) {
          newErrors.password = "パスワードは7文字以上で入力してください。";
        } else if (err.param.includes("confirmPassword")) {
          newErrors.confirmPassword = "PasswordとConfirm Passwordを一致させてください。";
        }
      });
    }
  }
};

// 2. リクエスト元で条件分けする。この場合、validator本体も条件分けの必要がありそれができない。
/*
exports.requestLoginRespondDashboard = (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    const newErrors = {};
    if(req.headers.referer === 'http://localhost:3000/login') {
      errors.errors.forEach((err, index) => {
        if (err.param.includes("email")) {
          newErrors.email = "有効なEmail Addressを入力してください。";
        } else if (err.param.includes("password")) {
          newErrors.password = "Passwordは7文字以上で入力してください。";
        }
      });
    } else if(req.headers.referer === 'http://localhost:3000/register') {
      errors.errors.forEach((err, index) => {
        if (err.param.includes("name")) {
          newErrors.name = "名前を入力してください。";
        } else if (err.param.includes("email")) {
          newErrors.email = "有効なEmail Addressを入力してください。";
        } else if (err.param.includes("password")) {
          newErrors.password = "パスワードは7文字以上で入力してください。";
        } else if (err.param.includes("confirmPassword")) {
          newErrors.confirmPassword = "PasswordとConfirm Passwordを一致させてください。";
        }
      });
    }
    return res.status(422).json(newErrors);
  }
  res.render('dashboard', { email: req.body.email });
};
*/

// 1. controllerでは分岐せずrouter/auth.jsで分岐するつもりだった。
/*
exports.requestLoginRespondDashboard = (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    const newErrors = {};
    errors.errors.forEach((err, index) => {
      if (err.param.includes("email")) {
        newErrors.email = "有効なEmail Addressを入力してください。";
      } else if (err.param.includes("password")) {
        newErrors.password = "Passwordは7文字以上で入力してください。";
      }
    });
    return res.status(422).json(newErrors);
  }
  res.render('dashboard', { email: req.body.email });
};

exports.requestRegisterRespondDashboard = (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    const newErrors = {};
    errors.errors.forEach((err, index) => {
      if (err.param.includes("name")) {
        newErrors.name = "名前を入力してください。";
      } else if (err.param.includes("email")) {
        newErrors.email = "有効なEmail Addressを入力してください。";
      } else if (err.param.includes("password")) {
        newErrors.password = "パスワードは7文字以上で入力してください。";
      } else if (err.param.includes("confirmPassword")) {
        newErrors.confirmPassword = "PasswordとConfirm Passwordを一致させてください。";
      }
    });
    return res.status(422).json(newErrors);
  }
  res.render('dashboard', { email: req.body.email });
};
*/