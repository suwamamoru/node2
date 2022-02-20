function login() {
  const userName = document.getElementById('user-name');
  const password = document.getElementById('password');
  const errorUl = document.getElementById('error-list');
  const loginDashboard = document.getElementById('login-dashboard');
  errorUl.innerHTML = "";
  if(userName.value==='' || password.value==='') {
    const errorLi = document.createElement('li');
    errorLi.textContent = "必要事項を全て記入してください。"
    errorUl.appendChild(errorLi);
  } else {
    document.location.href = "/dashboard";
  }
};