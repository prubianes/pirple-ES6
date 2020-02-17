//Global Variables
let user;
let storage = window.localStorage;

//Global Constants
const navegation = {
    welcome : 'welcome',
    signup : 'signup',
    login : 'login',
    dashboard : 'dashboard',
    errorPanel : 'errorPanel'
}

const errorTexts = {
    noUser : 'No user with this Username',
    usedUser : 'Username already used',
    wrongPassword : 'Wrong Password',
}

// Utils Functions
/**
 * User Object
 * @param {*} name 
 * @param {*} lastName 
 * @param {*} username 
 * @param {*} password 
 * @param {*} email 
 */
const newUser = (name, lastName, username, password, email) => {
    return {
        name : name,
        lastName : lastName,
        username : username,
        password : password,
        email : email
    }
}

/**
 * This function manage the navegation between sections in the Single Page App
 * @param from 
 * @param to 
 */
const navegate = (from, to) => {
    let sectionFrom = document.getElementById(from);
    let sectionTo = document.getElementById(to);

    sectionFrom.classList.add('hidden');
    sectionFrom.classList.remove('show');

    sectionTo.classList.remove('hidden');
    sectionTo.classList.add('show');
};

const manageErrors = (errorText) => {
    let errorSection = document.getElementById(navegation.errorPanel);
    let errorP = document.getElementById('error');

    errorP.innerText = errorText;

    errorSection.classList.add('show');
    errorSection.classList.remove('hidden');
}

const resetErrors = () => {
    let errorSection = document.getElementById(navegation.errorPanel);
    let errorP = document.getElementById(error);

    errorP.innerText = '';
    
    errorSection.classList.remove('show');
    errorSection.classList.add('hidden');
}

// View Functions
/**
 * This function manege the User Sign up form and creates a new user
 * @param {*} event 
 */
const userSignUp = (event) => {
    event.preventDefault();
    let name = document.getElementById("fName-SignUp").value;
    let lastName = document.getElementById("lName-SignUp").value;
    let username = document.getElementById("user-SignUp").value;
    let password = document.getElementById("password-SignUp").value;
    let email = document.getElementById("email-SignUp").value;
    user = newUser(name, lastName, username, password, email);

    if(storage.getItem(user.username) === null){
        storage.setItem(user.username, user);
        navegate(navegation.signin, navegation.dashboard)
    } else {
        manageErrors(errorTexts.usedUser);
    }
};

const userLogin = (event) => {
    event.preventDefault();
    if(storage.getItem(document.getElementById("user-login").value) !== null){
        user = storage.getItem(document.getElementById("user-login").value);
        if(user.password === document.getElementById("password-login").value){
            navegate(navegation.login, navegation.dashboard)
        } else {
            manageErrors(errorTexts.wrongPassword);
        }
    } else {
        manageErrors(errorTexts.noUser);
    }
}

// Event Listeners

// Signup Form
document.getElementById("userSignUpForm").addEventListener("submit",userSignUp);

// Login Form
document.getElementById("loginForm").addEventListener("submit",userLogin);