const fizzBuzz = () => {
    let number = 1;

    while(number <= 100){
        let result = "";

        // Check for Fizz
        if(number % 3 === 0){
            result += "Fizz";
        }

        // Check for Buzz
        if (number % 5 === 0){
            result += "Buzz";
        }

        // Check for Prime
        if(isPrime(number)){
            result = "Prime";
        }

        if(result === ""){
            result = number;
        }

        console.log(result)
        number++;
    }
}

const isPrime = (number) => {
    if(number === 1){
        return false;
    }
    
    let from  = 2;
    while(from < number){
        if(number % from === 0){
            return false;
        }
        from++;
    }
    return true;
}

fizzBuzz();