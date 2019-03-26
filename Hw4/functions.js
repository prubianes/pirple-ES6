const isMan = (name) => {
    const knownMan = ["Socrates", "Artigas", "Messi", "Suarez","Godin"];
    if (typeof name === 'string'){
        if(typeof knownMan.find(men => men === name) === "string"){
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

// Unit Testing
console.log(isMan("Godin")); // true
console.log(isMan("Pedro")); // false
console.log(isMan(100)); // false 

// Extra Credit
defaultCakes = ["vanilla", "chocolate"];

const flavorsIndicator  = (isChocolate, flavors = defaultCakes) => {
    if(!isChocolate) {
        console.log('This cake is ' + flavors[0])
    } else {
        console.log('This cake is ' + flavors[1])
    }
}

// Unit Testing
console.log(flavorsIndicator(true));  //Chocolate
console.log(flavorsIndicator(false));  // Vanilla
console.log(flavorsIndicator(false, ["Lemon", "chocolate"])); //Lemon