const togglePassword = document.querySelector('#togglePassword');
const togglePasswordRepeat = document.querySelector('#togglePasswordRepeat');
const password = document.getElementById("inputPassword");
const passwordRepeat = document.getElementById("inputPasswordRepeat");
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const alerts = document.getElementById("alerts");

let checkEight = document.getElementById("checkEight");
let checkSpecial = document.getElementById("checkSpecial");
let checkCapital = document.getElementById("checkCapital");
let checkDigit = document.getElementById("checkDigit");


togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

togglePasswordRepeat.addEventListener('click', function (e) {
    const type = passwordRepeat.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordRepeat.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});


inputPassword.oninput = function (event) {
    checkLength(password.value.length >= 8);
    checkSpec(specialChars.test(password.value));
    checkCap(/[A-Z]/.test(password.value));
    checkDig(/\d/.test(password.value));
}

inputPasswordRepeat.oninput = function () {
    if(password.value !== passwordRepeat.value) {
        alerts.style.setProperty("opacity", 1);
    } else {
        alerts.style.setProperty("opacity", 0);
    }
}


function checkLength(checkCondition) {
    if(checkCondition) {
        checkEight.style.setProperty("background-color", "#0E9700");
    } else {
        checkEight.style.setProperty("background-color", "#FE0006");
    }
}

function checkSpec(checkCondition) {
    if(checkCondition) {
        checkSpecial.style.setProperty("background-color", "#0E9700");
    } else {
        checkSpecial.style.setProperty("background-color", "#FE0006");
    }
}

function checkCap(checkCondition) {
    if(checkCondition) {
        checkCapital.style.setProperty("background-color", "#0E9700");
    } else {
        checkCapital.style.setProperty("background-color", "#FE0006");
    }
}

function checkDig(checkCondition) {
    if(checkCondition) {
        checkDigit.style.setProperty("background-color", "#0E9700");
    } else {
        checkDigit.style.setProperty("background-color", "#FE0006");
    }
}
