function Man(name) {
    this.name = name;
    this.mortal = true;
}


let socrates = new Man("Socrates"); // instantiate a man called "Socrate"
if (socrates instanceof Man) { // check if socrate is a man
    if(socrates.mortal){
        console.log(socrates.name + " is mortal.");
    }
}


// Extra Credit


function Cake(glaze) { 
    this.glaze = glaze;
}


let thisCake = new Cake("vanilla"); // instantiate a cake with vanilla glaze


if (thisCake.glaze === "vanilla" || thisCake.glaze === "chocolate") { // check whether the glaze of the cake is vanilla or chocolate
    if (thisCake.glaze !== "chocolate") { // check whether the glaze is not chocolate
        console.log("This cake is a vanilla.");
    } else {
        console.log("This cake is a chocolate.");
    }
}