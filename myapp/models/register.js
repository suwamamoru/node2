'use strict'
const userName = document.getElementById('user-name');
const emailAddress = document.getElementById('email-address');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const errorUl = document.getElementById('error-list');
const registerDashboard = document.getElementById('register-dashboard');
registerDashboard.addEventListener('click', () => {
  errorUl.innerHTML = "";
  if(userName.value==='' || emailAddress.value==='' || password.value==='' || confirmPassword.value==='') {
    const errorLi = document.createElement('li');
    errorLi.textContent = "必要事項を全て記入してください。"
    errorUl.appendChild(errorLi);
  } else if (password.value !== confirmPassword.value){
    const errorLi = document.createElement('li');
    errorLi.textContent = "パスワードが確認用のものと一致していません。"
    errorUl.appendChild(errorLi);
  } else if (password.value.length < 7) {
    const errorLi = document.createElement('li');
    errorLi.textContent = "パスワードは7文字以上で設定してください。"
    errorUl.appendChild(errorLi);
  } else {
    document.location.href = "/dashboard";
  }
});