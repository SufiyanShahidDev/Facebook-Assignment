const userData = JSON.parse(localStorage.getItem("userData"));

if (!userData) {
  window.location.href = "../login/login.html";
}