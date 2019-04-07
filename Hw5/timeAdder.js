const validLabels = ["seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"]

/**
 * Validates that the value is a positive number and the label is a valid string.
 * 
 * @param  value 
 * @param  label 
 */
const validatePair = (value, label) => {
    if(typeof value === "number" && value > 0){
        if(validLabels.includes(label)){
            return true;
        } else {
            console.log('Not a valid label')
            return false;
        }
    } else {
        console.log('Not a valid value')
        return false;
    }
}

/**
 * Converts the time to Seconds
 * 
 * @param value 
 * @param label 
 */
const convertToSeconds = (value, label) => {
    let result = 0;
    switch(label){
        case "day":
        case "days":
            result += 86400*value;
            break;
        case "hour":
        case "hours":
            result += 3600*value;
            break;
        case "minute":
        case "minutes":
            result += 60*value;
            break;
        case "seconds":
            result += value;
            break;
        default:
            // Default is 1 second
            result = value;
    }
    return result;
}

/**
 * Gets the larger posible label to apply to the result
 * 
 * @param total 
 */
const generateFinalResult = (total) => {
    let label;
    if(total % 86400 === 0){
        total /= 86400;
        label = "day";
    } else if(total % 3600 === 0) {
        total /= 3600;
        label = "hour";
    } else if(total 
        % 60 === 0){
        total /= 60;
        label = "minute";
    } else {
        label = "second";
    }
      
    // Adding 's' for plurals
    if(total > 1){
        label = label + "s";
    }
    
    return total + " " +label ;
}

/**
 * Main function of the Homework
 * 
 * @param  value1 
 * @param  label1 
 * @param  value2 
 * @param  label2 
 */
const timeAdder = (value1, label1, value2, label2) => {
    if(validatePair(value1, label1) && validatePair(value2, label2)){
        let totalsecondsAdded = convertToSeconds(value1, label1) + convertToSeconds(value2, label2);
        let finalResult = generateFinalResult(totalsecondsAdded);
        return finalResult;
    }
}

console.log(timeAdder(35,"days",24,"hours"));