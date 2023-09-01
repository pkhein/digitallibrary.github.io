const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});





const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');


function myFunction() {
    const usernameValue=username.value.trim();
	const emailValue=email.value.trim();
	const passwordValue=password.value.trim();
    validateLoginForm(onclick);
   
  }

function validateLoginForm(event) {
    event.preventDefault();
	//Validate User Name
	

    // Validate email
    if (!validateEmail(email.value)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate password
    if (!validatePassword(password.value)) {
        alert('Please enter a valid password.');
        return;
    }

    // If all validations pass, submit the form
    location.assign("slidingHtml.html");
  
	
}

function validateEmail(email) {
    // Use a regular expression to check if the email is valid
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
function validatePassword(password) {
    // Customize these rules to match your password requirements
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    return (
        password.length >= minLength &&
        hasUpperCase &&
        hasLowerCase &&
        hasNumber
    );
}


const pwd=document.getElementById("password");

function signin(){
   location.assign("home.html"); 
}