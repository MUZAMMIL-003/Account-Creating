var logout = () =>{
    localStorage.removeItem("logData")
    localStorage.removeItem("User-Login")
    window.location.assign("../sign up/sign up.html")
}



let Check = JSON.parse(localStorage.getItem("logData"));
console.log(Check);

userName.innerText = Check.name;




let Check2 = JSON.parse(localStorage.getItem("User-Login"));
console.log(Check2);

userName.innerText = Check2.name;