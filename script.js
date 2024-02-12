let forgotPwd = document.querySelector("#forgotPassword");
let signup = document.querySelector("#signup");

forgotPwd.addEventListener("mouseover", () => {
    forgotPwd.style.textDecoration = "underline";
})

forgotPwd.addEventListener("mouseout", () => {
    forgotPwd.style.textDecoration = "none";
})

signup.addEventListener("mouseover", () => {
    signup.style.textDecoration = "underline";
})

signup.addEventListener("mouseout", () => {
    signup.style.textDecoration = "none";
})

let checkboxLabel = document.querySelector(".remember");

checkboxLabel.addEventListener("mouseover", () => {
    checkboxLabel.style.textDecoration = "underline";
    checkboxLabel.style.cursor = "pointer";
})

checkboxLabel.addEventListener("mouseout", () => {
    checkboxLabel.style.textDecoration = "none";
})

let userName = document.querySelector(".Username");
let password = document.querySelector(".Password");
let label1 = document.querySelector(".label1");
let label2 = document.querySelector(".label2");

userName.addEventListener("focus", () => {
    label1.style.transform = "translate(-7px, -40px)";
})
userName.addEventListener("blur", () => {
    if(userName.value === ''){
        label1.style.transform = "none";
    }
})

password.addEventListener("focus", () => {
    label2.style.transform = "translate(-7px, -40px)";
})
password.addEventListener("blur", () => {
    if(password.value === ''){
        label2.style.transform = "none";
    }
})