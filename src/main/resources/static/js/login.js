const id = document.querySelector(".user_id");
const pw = document.querySelector(".user_pw");

function activateLogin() {
  let loginButton = document.querySelector(".login_button");
  let loginBtnColor = loginButton.style;

  id.value.length >= 1 && pw.value.length >= 6
    ? (loginBtnColor.backgroundColor = "#0095F6")
    : (loginBtnColor.backgroundColor = "#B2dffc");
}

const form = document.querySelector(".form");

form.addEventListener(
    'keyup',
    function () {
      activateLogin;
    },
    true
);