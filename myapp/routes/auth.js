const { request } = require('express');
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { validator } = require('../models/validator');
const { loginValidator } = require('../models/loginValidator');
const { registerValidator } = require('../models/registerValidator');

router.get('/login', authController.respondLogin);
router.get('/register', authController.respondRegister);

// 5. loginValidator()とregisterValidator()を両方入れた。
//    loginのエラーメッセージ表示以外は機能しない。
router.post('/dashboard', loginValidator(), registerValidator(), authController.respondDashboard);

// 4. 条件分岐をauthControllerに任せた。
//    しかし、validatorが関数だと認識されない。validator内がloginValidatorとregisterValidatorの二つを持っているからか？
//router.post('/dashboard', validator(), authController.respondDashboard);

// 3. router.post()の中ならreq.headers.refererを読み込めるので、分岐処理できることを期待した。
//    しかし、dashboardに遷移できないしvalidation結果も確認できない。
/*
router.post('/dashboard', (req, res) => {
  const referer = req.headers.referer;
  if(referer === 'http://localhost:3000/login') {
    router.post('/dashboard', loginValidator(), authController.requestLoginRespondDashboard);
  } else if(referer === 'http://localhost:3000/register') {
    router.post('/dashboard', registerValidator(), authController.requestRegisterRespondDashboard);
  }
});
*/

// 2. request.headers.refererで分岐処理する。しかし、request.headers.refererがundefindになる。
/*
const postDashboard = () => {
  console.log(request.headers.referer);
  if(request.headers.referer === 'http://localhost:3000/login') {
    router.post('/dashboard', loginValidator(), authController.requestLoginRespondDashboard);
  } else if(request.headers.referer === 'http://localhost:3000/register') {
    router.post('/dashboard', registerValidator(), authController.requestRegisterRespondDashboard);
  }
}
postDashboard();
*/

// 1. 上は読むが下は読まない。そもそも分岐されていない。
//router.post('/dashboard', loginValidator(), authController.requestLoginRespondDashboard);
//router.post('/dashboard', registerValidator(), authController.requestRegisterRespondDashboard);

module.exports = router;
