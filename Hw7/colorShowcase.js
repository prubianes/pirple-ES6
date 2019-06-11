console.log("Here are the rectangle IDs");
let allDivs = document.querySelectorAll('.rectangle');
for (div of allDivs){
    console.log(div['id']);
}