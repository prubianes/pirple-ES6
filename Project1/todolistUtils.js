//Global Constants
const navegation = {
    welcome : 'welcome',
    signup : 'signup',
    login : 'login',
    dashboard : 'dashboard',
    errorPanel : 'errorPanel',
    header : 'header'
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
 * List Object
 * @param {*} name 
 */
const newList = (name, created) => {
    return {
        name : name,
        created : created
    }
}

/**
 * Task Object
 * @param {*} description 
 * @param {*} dueDate 
 * @param {*} isCompleted 
 */
const newTask = (description, dueDate, isCompleted) => {
    return {
        description : description,
        dueDate : dueDate,
        isCompleted : isCompleted
    }
}

/**
 * Show menu
 */
const showMenu = () => {
    let menu = document.getElementById(navegation.header);
    
    menu.classList.remove('hidden');
    menu.classList.add('show');
}

/**
 * Hides menu
 */
const hideMenu = () => {
    let menu = document.getElementById(navegation.header);

    menu.classList.add('hidden');
    menu.classList.remove('show');
}

/**
 * Show the settings section and hides every other section
 */ 
const navegateToSettings = () => {
    document.getElementsByTagName('section').forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('show');
    })
    document.getElementById('settings').classList.add('show');
}

/**
 * Manages the erros
 * @param {*} errorText 
 */
const manageErrors = (errorText) => {
    let errorSection = document.getElementById(navegation.errorPanel);
    let errorP = document.getElementById('error');

    errorP.innerText = errorText;

    errorSection.classList.add('show');
    errorSection.classList.remove('hidden');
}

/**
 * Reset the error message
 */
const resetErrors = () => {
    let errorSection = document.getElementById(navegation.errorPanel);
    let errorP = document.getElementById(error);

    errorP.innerText = '';
    
    errorSection.classList.remove('show');
    errorSection.classList.add('hidden');
}

/**
 * Reset the login and signup forms
 */
const resetForms = () => {
    alert("hoola");
};

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

    actualPage = to;
};

const fillInnerTextById = (id, text) => {
    let element = document.getElementById(id);
    element.innerText = text;
};