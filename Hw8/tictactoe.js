let moves = 0;
let finish = false;

wrapper.addEventListener("mousedown", mark);

function mark(e){
    let divSelected = document.getElementById(e.target.id);
    let whoMove = "";
    if(divSelected.innerText == ""){
        if(moves % 2 === 0){
            divSelected.innerHTML = "X";
            divSelected.classList.add("x")   
            whoMove = "X";  
        } else {
            divSelected.innerHTML = "O";
            divSelected.classList.add("o")
            whoMove = "O";
        }
        checkResult()
        
        moves++;
        if(finish){
            setTimeout(() => {
                alert(whoMove + " has Won");
                reset();
            }, 300);
        }
        if(moves === 9){
            setTimeout(() => {
                alert("Cats game!");
                reset();
            }, 300);
        }
    }
}

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

const reset = () => {
    let divs = document.getElementsByClassName("box");
    for (let index = 0; index < divs.length; index++) {
        divs[index].classList = "box";
        divs[index].innerText = ""; 
    }
    moves = 0;
    finish = false;
}