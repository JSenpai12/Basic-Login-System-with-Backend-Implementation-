let signUpBtn = document.querySelector('.sign-in-up__btn');
let sign_container = document.querySelector('.sign-container');
let signIn = document.querySelector('.submit-btn');


document.querySelector('.submit-btn').addEventListener('click', (e)=> {
    e.preventDefault();
    logInFunction();
})

signUpBtn.addEventListener('click', ()=> {
    singUpWindow();
})


function singUpWindow() {

    sign_container.innerHTML = '';
    html = `
    <div class="header-box">
        <p class="greeting-title">Create Account</p>
        <p class="title-description">Sign up to get started with your account</p>
    </div>

    <div class="main-container">
        <form class="login-form">

            <div class="email-box">
                <label class="email-label">Email:</label>
                <input type="text" class="username_signUp" id="username-icon" placeholder="Enter your email">
            </div>

            <div class="user-box">
                <label class="user-label">Username:</label>
                <input type="text" class="username_sign_up" id="username-sign_up-icon" placeholder="Choose a username">
            </div>

            <div class="password-box">
                <label class="password-label">Password:</label>
                <input type="password" class="password_signUp" id="password-icon" placeholder="Enter your password">
            </div>

            <div class="password-box">
                <label class="confirm-password-label">Confirm Password:</label>
                <input type="password" class="confirm-password" id="password-icon" placeholder="Enter your password">
            </div>

            <div class="submit-btn__box">
                <button type="submit" class="register-btn" id="register-btn">Register</button>
            </div>

            <div class="footer-box">
                <hr class="break-line">
                <p class="sign-up-description">Already have an account?<a class="sign-up__btn" onclick="location.reload();"> Sign In</a></p>
            </div>

        <form/>
    </div>
    `;
    sign_container.innerHTML += html;

    document.querySelector('.register-btn').addEventListener('click', (e)=> {
        e.preventDefault();
        RegisterFunction();
    })

}

async function logInFunction() {
    let username = document.querySelector('.username').value;
    let password = document.querySelector('.password').value;

    // send to flask
    let response = await fetch("/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username: username, password: password})
    });

    // get response from flask
    let data = await response.json();
    window.alert(`System: ${data.message}`);

}

async function RegisterFunction() {
    console.log('Register Function');
    let username = document.querySelector('.username_signUp').value;
    let password = document.querySelector('.password_signUp').value;

    // send to flask
    let response = await fetch("/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username: username, password: password})
    });

    // get response from flask
    let data = await response.json();
    window.alert(`System: ${data.message}`);
}