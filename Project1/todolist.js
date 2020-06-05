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
        setUserToStorage(user);
        showMenu();
        getDashboard(user);
        navegate(navegation.signup, navegation.dashboard);
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
    let userID = document.getElementById("user-login").value;
    if(storage.getItem(userID) !== null){
        user = getUserFromStorage(userID);
        if(user.password === document.getElementById("password-login").value){
            showMenu();
            getDashboard(user);
            navegate(navegation.login, navegation.dashboard);
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

    let content = document.getElementById("contentDashboard");
    
    if (listIsEmpty(user.lists)){
        content.innerHTML = `
        <p>There's no lists for this user</p>
        `;
    } else {
        content.innerHTML = renderDashboard(user.lists);
    }
};

const getListView = (list) => {
    let title = document.getElementById("ListTitle");
    title.innerHTML = `${list.name}!`;

    let content = document.getElementById("contentList");
    
    if (list.tasks.length === 0){
        content.innerHTML = `
        <p>There's no tasks for this List</p>
        `;
    } else {
        content.innerHTML = renderList(list);
    }
};

const renderDashboard = (lists) => {
    let html = `<p id="lists">`;
    for(list in lists){
        html = html + `<spam id="${list.name}">${list.name}</spam>`
    };
    html = html + `</p>`;
    return html;
};

const renderList = (list) => {
    let html = `
    <ul id="tasks">
        ${list.tasks.map(task => `
            <li>
                <input type="checkbox" id="${task.description}" name="task" value="${task.isCompleted}">
                <span>${task.description}</span>
            </li>
        `)}
    </ul>
    `;
    return html;
};

const returnDashboard = () => {
    getDashboard(user);
    navegate(navegation.list, navegation.dashboard);
}

const addNewList = () => {
    prompt = window.prompt('Name for the List:');
    let list = newList(prompt, new Date());
    user.lists.push(list);

    setUserToStorage(user);

    getListView(list);
    navegate(navegation.dashboard, navegation.list);
}

// Event Listeners

// Signup Form
document.getElementById("userSignUpForm").addEventListener("submit",userSignUp);

// Login Form
document.getElementById("loginForm").addEventListener("submit",userLogin);
