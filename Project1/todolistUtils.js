//Global Constants
const navegation = {
    welcome : 'welcome',
    signup : 'signup',
    login : 'login',
    dashboard : 'dashboard',
    errorPanel : 'errorPanel',
    header : 'header',
    list : 'list' 
}

const errorTexts = {
    noUser : 'No user with this Username',
    usedUser : 'Username already used',
    wrongPassword : 'Wrong Password',
    listNameAlreadyUsed : 'List Name already used',
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
        email : email,
        lists: []
    }
}

/**
 * List Object
 * @param {*} name 
 */
const newList = (name, created) => {
    return {
        name : name,
        created : created,
        tasks: []
    }
}

/**
 * Task Object
 * @param {*} description 
 * @param {*} isCompleted 
 */
const newTask = (description, isCompleted) => {
    return {
        description : description,
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
    let userHeadline = document.getElementById("settingsUser");
    userHeadline.innerHTML = `${user.name}`;

    let selection = document.getElementsByTagName('section');
    for(let section of selection) {
        section.classList.add('hidden');
        section.classList.remove('show');
    };
    document.getElementById('settings').classList.add('show');
    document.getElementById('settings').classList.remove('hidden');
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
    let errorP = document.getElementById('error');

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

const compareList = (list, otherList) => {
    if(list.created < otherList.created){
        return 1;
    } else {
        return -1;
    }
}

const setUserToStorage = (user) => {
    storage.setItem(user.username, JSON.stringify(user));
};

const getUserFromStorage = (id) => {
    return JSON.parse(storage.getItem(id));
};

/**
 * 
 * @param {*} list 
 */
const listIsEmpty = (list) => {
    for(var key in list) {
        if(list.hasOwnProperty(key))
            return false;
    }
    return true;
}

/**
 * 
 * @param {*} user 
 * @param {*} listName 
 */
const getListByName = (user, listName) => {
    let list;
    for (let index = 0; index < user.lists.length; index++) {
        list = user.lists[index];
        if(listName === list.name){
            break;
        }
    }
    return list;
};

/**
 * 
 * @param {*} user 
 * @param {*} listNewName 
 */
const checkListNewName = (user, listNewName) => {
    let result;
    user.lists.forEach(list => {
        if(list.name === listNewName){
            result = true;
        }
    })
    return result;
};