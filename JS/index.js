// Login Page
let myLogin = document.getElementById("perant");
let mybackground = document.getElementById("background-l-s");
function openLogin() {
    myLogin.style.display = "block";
    mybackground.style.display = "block";
}

function closeLogin() {
    myLogin.style.display = "none";
    mybackground.style.display = "none";
}

function signUp() {
    let myLogin = document.getElementById("login-sign-up");
    myLogin.style.transform = " rotateY(180deg) ";
}

let myLogin2 = document.getElementById("perant");

myLogin2.onmouseleave = () => {
    let myLogin = document.getElementById("login-sign-up");
    myLogin.style.transform = " rotateY(0deg) ";
}