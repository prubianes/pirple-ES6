//Global Variables
let hash = objectHash;
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
    resetErrors();
    let name = document.getElementById("fName-SignUp").value;
    let lastName = document.getElementById("lName-SignUp").value;
    let username = document.getElementById("user-SignUp").value;
    let password = document.getElementById("password-SignUp").value;
    let email = document.getElementById("email-SignUp").value;
    let checked = document.getElementById("check-SignUp").checked;

    if(checked){
        password = hash.sha1(password);

        user = newUser(name, lastName, username, password, email);
    
        if(storage.getItem(user.username) === null){
            setUserToStorage(user);
            showMenu();
            getDashboard(user);
            navegate(navegation.signup, navegation.dashboard);
        } else {
            manageErrors(errorTexts.usedUser);
        }
    } else{
        manageErrors(errorTexts.mustAcceptTerms);
    }
};

/**
 * This function manage the User Login form and creates a new user
 * @param {*} event 
 */
const userLogin = (event) => {
    event.preventDefault();
    resetErrors();
    let userID = document.getElementById("user-login").value;
    if(storage.getItem(userID) !== null){
        user = getUserFromStorage(userID);
        if(user.password === hash.sha1(document.getElementById("password-login").value)){
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
    content.innerHTML = '';
    if (listIsEmpty(user.lists)){
        content.innerHTML = `
        <p>There's no lists for this user</p>
        `;
    } else {
        content.innerHTML = renderDashboard(user.lists.sort(compareList));
        let selectionItem = document.getElementsByClassName("listItem");
        for(let item of selectionItem){
            item.addEventListener("click", workWithList);
        }
    }
};

/**
 * Render all the listView
 * @param {*} list 
 */
const getListView = (list) => {
    let title = document.getElementById("ListTitle");
    title.innerHTML = `${list.name}`;

    let content = document.getElementById("contentList");
    
    if (list.tasks.length === 0){
        content.innerHTML = `
        <p>There's no tasks for this List</p>
        `;
    } else {
        content.innerHTML = renderList(list);
        let selectionItem = document.getElementsByClassName("taskCheck");
        for(let item of selectionItem){
            item.addEventListener("click", checktask);
        }
    }
};

/**
 * This method is called from the dashboard to get the listView
 * @param {Click} event 
 */
const workWithList = (event) => {
    event.preventDefault();
    let listName = event.target.innerText;
    let list = getListByName(user, listName);

    getListView(list);
    navegate(navegation.dashboard, navegation.list);
}

/**
 * Render dashboard HTML
 * @param {*} lists 
 */
const renderDashboard = (lists) => {
    let html = `<p id="lists">`;
    lists.forEach(list =>  html = html + `<spam class="listItem">${list.name}</spam><br>`)
    html = html + `</p>`;
    return html;
};

/**
 * Render List HTML
 * @param {*} list 
 */
const renderList = (list) => {
    let html = `<ul id="tasks">`
    list.tasks.forEach(task => { 
        if(task.isCompleted){
            html = html + `
            <li>
                <input type="checkbox" class="taskCheck" name="${task.description}" value="${task.description}" checked>
                <span class="completed">${task.description}</span>
            </li>
            `
        } else {
            html = html + `
            <li>
                <input type="checkbox" class="taskCheck" name="${task.description}" value="${task.description}">
                <span>${task.description}</span>
            </li>
            `
        }
    })
    html = html + `</ul>`;
    return html;
};

const logout = () => {
    user = undefined;
    let selection = document.getElementsByTagName('section');
    for(let section of selection) {
        section.classList.add('hidden');
        section.classList.remove('show');
    };
    document.getElementById('welcome').classList.add('show');
    document.getElementById('header').classList.remove('show');
    document.getElementById('header').classList.add('hidden');
}

const settingsUpdate = (event) => {
    event.preventDefault();
    resetErrors();
    let name = document.getElementById("fName-settings").value;
    let lastName = document.getElementById("lName-settings").value;
    let username = document.getElementById("user-settings").value;
    let password = document.getElementById("password-settings").value;
    let email = document.getElementById("email-settings").value;

    if(username !== ""){
        if(storage.getItem(username) !== null){
            manageErrors(errorTexts.usedUser);
            return;
        }
        storage.removeItem(user.username);
        user.username = username;
    }
    if(name !== ""){
        user.name = name;
        let userHeadline = document.getElementById("settingsUser");
        userHeadline.innerHTML = `${user.name}`;
    }
    if(lastName !== ""){
        user.lastName = lastName;
    }
    if(email !== ""){
        user.email = email;
    }
    if(password !== ""){
        password = hash.sha1(password);
        user.password = password;
    } 

    setUserToStorage(user);
}

// Event Listeners

// Signup Form
document.getElementById("userSignUpForm").addEventListener("submit",userSignUp);

// Login Form
document.getElementById("loginForm").addEventListener("submit",userLogin);

// Settings
document.getElementById("settingsForm").addEventListener("submit",settingsUpdate);
