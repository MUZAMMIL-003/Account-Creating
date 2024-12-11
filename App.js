let checkLogin = JSON.parse(localStorage.getItem("User-Login"));
let checkLogin2 = JSON.parse(localStorage.getItem("logData"));
if (checkLogin) {
    location.replace("./dashboard/dashboard.html");
}else if(checkLogin2){ location.replace("./dashboard/dashboard.html");}
// Get Element ///////////////////////////

let logEmail = document.getElementById("login-email");
let logPass = document.getElementById("login-password");

let logData = JSON.parse(localStorage.getItem("users Data"));

let logArr = getLogin() ? [...getLogin()] : [];

// function =======================

function getLogin() {
  return JSON.parse(localStorage.getItem("User-Login"));
}

function setLogin(login) {
  localStorage.setItem("User-Login", JSON.stringify(login));
}

function toCheckLogin(e) {
  e.preventDefault();

  logArr = [
    ...logArr,
    {
      name: logEmail.value,
      password: logPass.value,
    },
  ];

  for (var i = 0; i < logData.length; i++) {
    if (
      logEmail.value == logData[i].email &&
      logPass.value == logData[i].password
    ) {
      console.log(logData[i]);
      setLogin(logArr);
      alert("User Login Seccessfully");
      window.location.assign("./dashboard/dashboard.html");
      return;
    } else {
      alert("Email Address or Password Not Found..");
      // return;
    }
  }
}

let passSpan = document.getElementById("span-password");

function loginValidate(e) {
  if (e.target.value == "") {
    passSpan.style.visibility = "hidden";
  } else if (e.target.value.length < 6) {
    passSpan.style.visibility = "visible";
    passSpan.innerText = "Week Password";
    passSpan.style.color = "red";
  } else if (e.target.value.length > 7) {
    passSpan.style.visibility = "visible";
    passSpan.innerText = "Strong Password";
    passSpan.style.color = "green";
  }
}
