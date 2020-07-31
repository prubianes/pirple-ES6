/*
    Homework #11: Exceptions
*/

const reverseJsonArray = (jsonString) => {
    try{
        const parsedArray = JSON.parse(jsonString);
        return JSON.stringify(parsedArray.reverse());
    } catch (error) {
        console.log('Error: ' + error);
        return false;
    }
}

// Correct
console.log(reverseJsonArray('["a","b","c"]'));

// Error
console.log(reverseJsonArray(123));

// Extra Credit

//1. Without any arguments
console.log(reverseJsonArray());
//2. With a boolean as the argument
console.log(reverseJsonArray(true));
//3. With an Array (non-stringified) as the argument
console.log(reverseJsonArray(["a", "b", "c"]));
//4. With a string argument that is not properly formatted JSON
console.log(reverseJsonArray('[[[["a",}}"b","c"]'));
//5. With a stringified-array that only has one value
console.log(reverseJsonArray('["a"]'));
//6. With a stringified-array that is empty
console.log(reverseJsonArray('[]'));
//7. With a stringified-array that has an even-number of values
console.log(reverseJsonArray('["a", "b"]'));
//8. With a stringified-array that has an odd-number of values
console.log(reverseJsonArray('["a", "b","a", "b"]'));