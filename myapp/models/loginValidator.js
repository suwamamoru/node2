const { check } = require("express-validator");

exports.loginValidator = (req, res, next) => {
  return [
    check("email")
      .isEmail()
      .notEmpty(),
    check("password")
      .isLength({ min: 7 })
  ];
};