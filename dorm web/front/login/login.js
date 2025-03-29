
document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const main = document.getElementById('main');
    
    const defaultAccounts = [
        { email: "admin@example.com", password: "123" }
    ];


    let storedAccounts = JSON.parse(localStorage.getItem("accounts")) || defaultAccounts;
    
 
    if (!localStorage.getItem("accounts")) {
        localStorage.setItem("accounts", JSON.stringify(storedAccounts));
    }


    signInButton.addEventListener("click", function (event) {
        event.preventDefault(); 

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            alert("Please fill in all fields.");
            return;
        }
    
        const userExists = storedAccounts.find(user => user.email === email && user.password === password);

        if (userExists) {
            alert("Login successful!");
            console.log("User logged in:", email);
            window.location.href = "/front/login/dashboard/dashboard.html";
        } else {
            alert("Invalid email or password. Please register first.");
        }
    });

    signUpButton.addEventListener('click', () => {
        main.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        main.classList.remove("right-panel-active");
    });
});
