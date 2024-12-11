

// Get Element ///////////////////////////

// sign Up 

let user = document.getElementById('signUp-name');
let email = document.getElementById('signUp-email');
let password = document.getElementById('signUp-password');
let dropDown = document.getElementById("dropDown")

// Get Sign-Up Span 

let userSpan = document.getElementById('span-user');
let emailSpan = document.getElementById('span-email');
let passSpan = document.getElementById('span-password');


// Save it in array using : ""

var data = (getItem()) ? [...getItem()] : [];

// function ///////////////////////////

function signUpValidate(e, check) { // for Validation
    if (check === 'user') {
        if (e.target.value == "") {
            userSpan.style.visibility = "hidden";
        }
        else if (e.target.value.length < 2) {
            userSpan.style.visibility = "visible";
            userSpan.innerText = "Invalid User Name";
            userSpan.style.color = "red"
        }
        else if (e.target.value.length > 3) {
            userSpan.style.visibility = "visible";
            userSpan.innerText = "Valid User Name";
            userSpan.style.color = "green"
        }
    }

    if (check === 'password') {
        if (e.target.value == "") {
            passSpan.style.visibility = "hidden";
        }
        else if (e.target.value.length < 6) {
            passSpan.style.visibility = "visible";
            passSpan.innerText = "Week Password";
            passSpan.style.color = "red";
        }
        else if (e.target.value.length > 7) {
            passSpan.style.visibility = "visible";
            passSpan.innerText = "Strong Password";
            passSpan.style.color = "green";
        }
    }
}


function setItem(data) { // no:2
    localStorage.setItem('users Data', JSON.stringify(data));
}

function getItem() {
    return JSON.parse(localStorage.getItem("users Data"));
}

function toSubmit(e) { // no :1
    e.preventDefault();

    data = [...data,
    {
        name: user.value,
        email: email.value,
        password: password.value,
        dropDown: dropDown.value,
    },
    ];
    let logData = {
        name: user.value,
        email: email.value,
        password: password.value,
        dropDown: dropDown.value,
    }

    localStorage.setItem("logData", JSON.stringify(logData));

    setItem(data); // update Local-Storage,


    user.value = "";
    email.value = "";
    password.value = "";
    dropDown.value = "empty";

    setItem(data); // update Local-Storage,
    window.location.replace("../dashboard/dashboard.html")
};
