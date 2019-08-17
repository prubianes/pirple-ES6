// Initialize the move and finish variables
let moves = 0;
let finish = false;

// Listener in the wrapper for making the click
wrapper.addEventListener("mousedown", mark);

/**
 * mark function, it marks the click and checks for the result.
 * @param {*} e 
 */
function mark(e){
    // gets the selected div
    let divSelected = document.getElementById(e.target.id);
    let whoMove = "";

    // Checks if the div is empty otherwise don't do anything
    if(divSelected.innerText == ""){
        // It decide if its X or O
        if(moves % 2 === 0){
            divSelected.innerHTML = "X";
            divSelected.classList.add("x")   
            whoMove = "X";  
        } else {
            divSelected.innerHTML = "O";
            divSelected.classList.add("o")
            whoMove = "O";
        }
        // Check the results.
        checkResult()
        
        // Add a move
        moves++;
        // if someone won gives the alert and reset the board.
        if(finish){
            setTimeout(() => {
                alert(whoMove + " has Won");
                reset();
            }, 300);
        }
        // if there's no more free divs gives the cats game alert
        if(moves === 9){
            setTimeout(() => {
                alert("Cats game!");
                reset();
            }, 300);
        }
    }
}

/**
 * Check all the posible results for game ending.
 */
const checkResult = () => {
    let div1 = document.getElementById("1");
    let div2 = document.getElementById("2");
    let div3 = document.getElementById("3");
    let div4 = document.getElementById("4");
    let div5 = document.getElementById("5");
    let div6 = document.getElementById("6");
    let div7 = document.getElementById("7");
    let div8 = document.getElementById("8");
    let div9 = document.getElementById("9");

    threeEqual(div1, div2, div3);
    threeEqual(div4, div5, div6);
    threeEqual(div7, div8, div9);

    threeEqual(div1, div4, div7);
    threeEqual(div2, div5, div8);
    threeEqual(div3, div6, div9);

    threeEqual(div1, div5, div9);
    threeEqual(div3, div5, div7);
}

/**
 * Check for 3 equal divs.
 * @param {*} one 
 * @param {*} two 
 * @param {*} three 
 */
const threeEqual = (one, two, three) => {
    if(one.innerText != "" && two.innerText != "" && three.innerText != ""){
        if(one.innerText === two.innerText && two.innerText === three.innerText){
            one.classList.add("won");
            two.classList.add("won");
            three.classList.add("won");
            finish = true;
        }
    }
}

/**
 * Reset the game after is done.
 */
const reset = () => {
    let divs = document.getElementsByClassName("box");
    for (let index = 0; index < divs.length; index++) {
        divs[index].classList = "box";
        divs[index].innerText = ""; 
    }
    moves = 0;
    finish = false;
}