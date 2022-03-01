exports.register = (req, res) => {
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
    res.render('register', { errorMessage: newErrors });
  }
  res.render('dashboard', { email: req.body.email });
};