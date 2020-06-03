//Global Variables
let user;
let storage = window.localStorage;
let actualPage;

// View Functions
/**
 * This function manage the User Sign up form and creates a new user
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
        showMenu();
        navegate(navegation.signup, navegation.dashboard)
    } else {
        manageErrors(errorTexts.usedUser);
    }
};

/**
 * This function manage the User Login form and creates a new user
 * @param {*} event 
 */
const userLogin = (event) => {
    event.preventDefault();
    if(storage.getItem(document.getElementById("user-login").value) !== null){
        user = storage.getItem(document.getElementById("user-login").value);
        if(user.password === document.getElementById("password-login").value){
            showMenu();
            navegate(navegation.login, navegation.dashboard)
        } else {
            manageErrors(errorTexts.wrongPassword);
        }
    } else {
        manageErrors(errorTexts.noUser);
    }
};

/**
 * 
 * @param {User} user 
 */
const getDashboard = (user) => {
    let title = document.getElementById("dashboardTitle");
    title.innerHTML = `Welcome, ${user.name}!`;
    if(user.lists != null){
        let defaultList = newList("Default", new Date());
        user.lists = [defaultList];
    }
    let content = document.getElementById("content");
    content.innerHTML = renderDashboard(user.lists);
};

const renderDashboard = (lists) => {
    let html = `
    <ul id="lists">
        ${lists.map(list => `<li>${list.name}</li>`)}
    </ul>
    `;
};

// Event Listeners

// Signup Form
document.getElementById("userSignUpForm").addEventListener("submit",userSignUp);

// Login Form
document.getElementById("loginForm").addEventListener("submit",userLogin);
