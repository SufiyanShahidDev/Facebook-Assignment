
let email = document.getElementById("email");

let password = document.getElementById("password");

let loginBtn = document.getElementById("loginBtn");


const sweetAlert = (error, title, message) => {
    Swal.fire({
        icon: error,
        title: title,
        text: message,
    });
};


const loginHandler = () => {
    let emailValue = email.value;
    passwordValue = password.value;
    if (emailValue.trim() === "" || passwordValue.trim() === "") {
        return sweetAlert("error", "Something Went Wrong", "Please Fill out all fields");
    };

    // get users from local storage
    let dataOfLocalStorage = JSON.parse(localStorage.getItem("users"));
    isAccountExist = false;

    for (let i = 0; i < dataOfLocalStorage.length; i++) {
        let user = dataOfLocalStorage[i]

        if (user?.email === emailValue) {
            isAccountExists = true;
            if (user?.password == passwordValue) {
                localStorage.setItem("userData", JSON.stringify(user));
                alert("Login Successfully");
                window.location.href = "../index.html";
            } else {
                sweetAlert("error", "Login Error", "Please enter correct password!");
            }
            break;
        }
    }

    if (isAccountExist === false) {
        sweetAlert(
            "error",
            "Account Not Exist",
            "You don't have an account, Please create your account!",
        )
    }
};

loginBtn.addEventListener("click", loginHandler);


// Forgot Password
let editPassword = document.getElementById("edit-password");

let forgotForm = document.getElementById("forgot-form");

let regEmail = document.getElementById("reg-email");

let newPassword = document.getElementById("new-password");

let confirmPassword = document.getElementById("confirm-password");

let submit = document.getElementById("submit");

let cancel = document.getElementById("cancel");

editPassword.addEventListener("click", function (e) {
    e.preventDefault();
    if (email && email.value.trim() !== "") {
        regEmail.value = email.value.trim();
    } else {
        regEmail.value = "";
    }
    newPassword.value = "";
    confirmPassword.value = "";
    forgotForm.style.display = "block";
});

cancel.addEventListener("click", function (e) {
    e.preventDefault();
    forgotForm.style.display = "none";
});

submit.addEventListener("click", function (e) {
    e.preventDefault();

    let emailValue = regEmail.value.trim();
    let newPass = newPassword.value;
    let confirmPass = confirmPassword.value;

    if (emailValue === "" || newPass.trim() === "" || confirmPass.trim() === "") {
        return sweetAlert("error", "Something Went Wrong", "Please fill out all fields");
    }
    if (newPass !== confirmPass) {
        return sweetAlert("error", "Password Mismatch", "New password and confirm password do not match");
    }
    if (newPass.length < 4) {
        return sweetAlert("error", "Weak Password", "Password must be at least 4 characters");
    }

    let dataOfLocalStorage = JSON.parse(localStorage.getItem("users"));
    if (!dataOfLocalStorage || !Array.isArray(dataOfLocalStorage) || dataOfLocalStorage.length === 0) {
        return sweetAlert("error", "Account Not Exist", "You don't have an account, please create your account!");
    }

    let isAccountExist = false;

    for (let i = 0; i < dataOfLocalStorage.length; i++) {
        let user = dataOfLocalStorage[i];
        if (user?.email === emailValue) {
            isAccountExist = true;

            user.password = newPass;
            dataOfLocalStorage[i] = user;
            localStorage.setItem("users", JSON.stringify(dataOfLocalStorage));

            sweetAlert("success", "Password Updated", "Your password has been updated successfully. You can now log in.");
            forgotForm.style.display = "none";
            return;
        }
    }

    if (isAccountExist === false) {
        sweetAlert("error", "Account Not Exist", "You don't have an account, please create your account!");
    }
});
