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

exports.registerValidator = (req, res, next) => {
  return [
    check("name")
      .notEmpty(),
    check("email")
      .isEmail()
      .notEmpty(), 
    check("password")
      .isLength({ min: 7 }),
    check("confirmPassword")
      .custom((value, { req }) => {
        if(req.body.password !== req.body.confirmPassword) {
          return false;
        }
        return true;
      })
  ];
};