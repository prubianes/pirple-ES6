/*
var, are used to declare variables, whose values can be changed during excecution of the script,
vars have global scope and are hoisted.

let, are used to declare variables, whose values can be changed during excecution of the script
the diferece with var is that they have block scope and they are not hoisted.

const, are used to declare constants, whose values cannot be changed during excecution of the script.
they have block scope and they are not hoisted.

Hoisting is the process of moving the declaration to the top of the scope before execution by the compiler
*/

// this variable is available for all the scope
var global = "Global Scope";

function blockExample(){
    // This constant will only be available in the function, outside this block accessing to it will give an error
    const nameOfTheFunction = "blockExample";

    /*  This variable has a block scope also, but as is a let variable, it could change values, but outside this block 
        accessing to it will give an error */
    let otherVariable = true;
    otherVariable = false;
}