class Vehicle {
    constructor(make, model, year, weight) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.needsMaintenance = false;
        this.tripsSinceMaintenance = 0;
    }

    repair() {
        this.needsMaintenance = false;
        this.tripsSinceMaintenance = 0;
    }
}

class Cars extends Vehicle {
    constructor(make, model, year, weight) {
        super(make, model, year, weight);
        this.isDriving = false;
    }

    drive() {
        this.isDriving = true;
    }

    stop() {
        this.isDriving = false;
        this.tripsSinceMaintenance += 1;
        if (this.tripsSinceMaintenance === 100) {
            this.needsMaintenance = true;
        }
    }

    static PrintMaintenanceStatus(car) {
        console.log('##### This is the Status Report for Cars #####')

        console.log(`Make of the car: ${car.make}`);
        console.log(`Model of the car: ${car.model}`);
        console.log(`Year of release: ${car.year}`);
        console.log(`Weight of the car: ${car.weight}`);
        console.log(`Number of trips since maintenance =  ${car.tripsSinceMaintenance}`);
        console.log(`need maintenance = `, ((car.needsMaintenance)? "Yes": "No"));
    }
}

class Planes extends Vehicle{
    constructor(make, model, year, weight){
        super(make, model, year, weight);
        this.isFlying = false;
    }

    flyling() {
        if(this.needsMaintenance){
            console.log("The plane can't fly until it's repaired");
        } else {
            this.isFlying = true;
        }
        
    }

    landing() {
        this.isFlying = false;
        this.tripsSinceMaintenance += 1;
        if (this.tripsSinceMaintenance === 100) {
            this.needsMaintenance = true;
        }
    }

    static PrintMaintenanceStatus(plane) {
        console.log('##### This is the Status Report for Plane #####')

        console.log(`Make of the plane: ${plane.make}`);
        console.log(`Model of the plane: ${plane.model}`);
        console.log(`Year of release: ${plane.year}`);
        console.log(`Weight of the plane: ${plane.weight}`);
        console.log(`Number of trips since maintenance =  ${plane.tripsSinceMaintenance}`);
        console.log(`need maintenance = `, ((plane.needsMaintenance)? "Yes": "No"));
    }

}

// Car Creation
const car01 = new Cars("Audi", "Quattro", "1985", 2000);
for(let i = 0; i <= 102; i++) {
    car01.drive();
    car01.stop();
}
Cars.PrintMaintenanceStatus(car01);
console.log("  ")

const car02 = new Cars("Lancia", "Delta", "1990", 1800);
for(let i = 0; i <= 150; i++) {
    car02.drive();
    car02.stop();
}
car02.repair();
Cars.PrintMaintenanceStatus(car02);
console.log("  ")

const car03 = new Cars("Ford", "Escort", "1993", 1900);
for(let i = 0; i <= 80; i++) {
    car03.drive();
    car03.stop();
}
Cars.PrintMaintenanceStatus(car03);
console.log("  ")

//Creation of Planes
const plane01 = new Planes("Boing", "747", "1994", 90000);
for(let i = 0; i <= 101; i++) {
    plane01.flyling();
    plane01.landing();
}
Planes.PrintMaintenanceStatus(plane01);
console.log("  ")

const plane02 = new Planes("Boing", "747", "1994", 90000);
for(let i = 0; i <= 100; i++) {
    plane02.flyling();
    plane02.landing();
}
plane02.repair()
for(let i = 0; i <= 20; i++) {
    plane02.flyling();
    plane02.landing();
}
Planes.PrintMaintenanceStatus(plane02);