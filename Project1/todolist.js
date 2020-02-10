let user;


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

const userSignUp = (event) => {
    event.preventDefault();
    console.log("llegue");
    console.log(document.getElementById("fName-SignUp").value);
};

const userLogin = (event) => {

}

// Event Listeners

// Signup Form
document.getElementById("userSignUpForm").addEventListener("submit",userSignUp);

// Login Form
document.getElementById("loginForm").addEventListener("submit",userLogin);