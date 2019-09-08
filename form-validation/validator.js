function validate() {
    let email = document.registerForm.email.value;
    let password = document.registerForm.password.value;
    let country = document.registerForm.country.value;
    let rememberMe = document.registerForm.rememberMe.checked;

    if (email.length === 0) {
        alert("Email is mandatory!");
        document.registerForm.email.focus();
        return false;      
    }
    else if (password.length === 0) {
        alert("Password is mandatory!");
        document.registerForm.password.focus();
        return false;
    }
    else if (country.length === 0) {
        alert("Country is mandatory!");
        document.registerForm.country.focus();
        return false;
    }
    else {
        alert("Validation successful!");
        return true;
    }
}