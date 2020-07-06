/*
Homework #10: Destructuring
Q: What is the differences between destructuring an object and destructuring an array? 
When would each be appropriate too use?

A: The difference in deconstructing an Array and an Object is the way you have to use to assign the values to variables, 
Arrays use brackets [] and Objects use Braces {}, 
also with Objects you have to use the property name from the object 
to achieve the assignment of the variable.

Other difference is that with Arrays you have to respect the order of the elements that the Array has, 
so that order is used in the variables assignation, the Objects in the other hand as you 
use the property name you don't have to respect any order.

As for "When would each be appropriate too use?", in my opinion it depends on if you are working with Objects or Arrays, 
but for ease of use I feel more comfortable to use deconstruction with Objects, 
because the use of properties prevent you to have to know all the items that an Array has and the order they have.
*/


// Example: Objects
const aObject = {
    country: 'Uruguay',
    capital: 'Montevideo',
    countryCode: 'UY',
    continent: 'South America',
}

// set constants from the values of the object
const {country, capital, continent} = aObject;
console.log(`Object: ${country}'s, Capital is ${capital}, located in ${continent}`);

// Setting constant without using object property name as constant name
const {countryCode: code} = aObject;
console.log(code);


// Example: Array
const anArray = ['Uruguay', 'Montevideo', 'South America', 'UY'];

// set constants from the values of the array
const [countryArray, capitalArray, continentArray] = anArray;
console.log(`Array: ${countryArray}'s, Capital is ${capitalArray}, located in ${continentArray}`);

// skipping values from the array
const [,,,codeArray] = anArray;
console.log(codeArray);