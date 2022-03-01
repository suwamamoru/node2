const { check, validationResult } = require("express-validator");

const registerValidator = (req, res) => {
  return [
    check("name")
      .notEmpty()
      .withMessage('Nameを入力してください。'),
    check("email")
      .isEmail()
      .notEmpty()
      .withMessage('有効なEmail Addressを入力してください。'), 
    check("password")
      .isLength({ min: 7 })
      .withMessage('Passwordは7文字以上で入力してください。'),
    check("confirmPassword")
      .custom((value, { req }) => {
        if(req.body.password !== req.body.confirmPassword) {
          return false;
        }
        return true;
      })
      .withMessage('PasswordとConfirm Passwordを一致させてください。')
  ]
}

module.exports = { registerValidator };