
class Elevator {
    constructor(name, minFloor, maxFloor){
        this.name = name;
        this.minFloor = minFloor;
        this.maxFloor = maxFloor;

        this.currentFloor = 0;
        this.destination = 0;
        this.origin = 0;
        this.emergencyStop = false;
        this.speedPerFloor = 1000;
        this.isAvailable = true;
        this.elevatorModes = {
            picking : 'picking',
            riding : 'riding'
        }
    }

    /**
     * Checks if an elevator can go to a set floor
     * @param {*} destination 
     * @returns 
     */
    canGoToDestination(destination){
        return (this.minFloor <= destination && this.maxFloor >= destination && this.isAvailable && !this.emergencyStopped);
    }

    /**
     * Moves a Elevator to a Destination floor, it calculate the duration of the travel and set that as timeout to
     * simulate the unavailability of the Elevator
     * @param {*} destination 
     * @param {*} passagerID 
     */
    moveElevator(passagerID){
        logger(` # ELEVATOR ${this.name} for PassagerID: ${passagerID} # Close Doors`);
        this.isAvailable = false;

        if(this.origin < this.currentFloor){
            this.moveOneFloor(-1, this.elevatorModes.picking, passagerID);
        } else {
            this.moveOneFloor(1, this.elevatorModes.picking, passagerID);
        }
    }

    moveOneFloor(direction, mode, passagerID){
        setTimeout(() => {

            if(mode === this.elevatorModes.picking){
                if (this.origin == this.currentFloor) {
                    logger(` # ELEVATOR ${this.name} for PassagerID: ${passagerID}# Got to the ${this.currentFloor}`);
                    logger(` # ELEVATOR ${this.name} for PassagerID: ${passagerID}# Open Doors`);
                    logger(` # ELEVATOR ${this.name} for PassagerID: ${passagerID}# Enters the elevator`);
                    if(this.destination < this.currentFloor){
                        this.moveOneFloor(-1, this.elevatorModes.riding, passagerID);
                    } else {
                        this.moveOneFloor(1, this.elevatorModes.riding, passagerID);
                    }
                } else {
                    this.currentFloor += direction;
                    this.moveOneFloor(direction, this.elevatorModes.picking, passagerID);
                }
            } else {
                if (this.destination == this.currentFloor) {
                    logger(` # ELEVATOR ${this.name} for PassagerID: ${passagerID}# Got to the ${this.currentFloor}`);
                    logger(` # ELEVATOR ${this.name} for PassagerID: ${passagerID}# Open Doors`);
                    logger(` # ELEVATOR ${this.name} for PassagerID: ${passagerID}# Exits the elevator`);
                    this.isAvailable = true;
                } else {
                    this.currentFloor += direction;
                    this.moveOneFloor(direction, this.elevatorModes.riding, passagerID);
                }
            }
        }, this.speedPerFloor);
    }

    callEmergency(){
        this.isAvailable = false;
        this.emergencyStop = true;
        
        logger(` # ELEVATOR ${this.name} in Emergency #  Open Doors`);
    }

    endEmergency(){
        this.emergencyStop = false;
        this.isAvailable = true;
    }
}

class Building {
    constructor(){
        this.elevators = [];
    }

    addElevator(elevator) {
        this.elevators.push(elevator);
    }

    /**
     * Returns an available elevator if can perform the travel, is not in use and is the nearest.
     * And perform the travel if got one otherwise stops for a second and try again.
     * @param {*} floorTo 
     * @returns 
     */
    getAvailableElevator(floorTo, floorFrom, passagerID){
        let selectedElevator = null;
        let currentDifference = 0;
        this.elevators.forEach(elevator => {
            if(elevator.isAvailable && elevator.canGoToDestination(floorTo) && elevator.canGoToDestination(floorFrom)){
                if(selectedElevator == null){
                    selectedElevator = elevator;
                    currentDifference = Math.abs(elevator.currentFloor - floorFrom);
                } else {
                    if(currentDifference > Math.abs(elevator.currentFloor - floorFrom)){
                        selectedElevator = elevator;
                        currentDifference = Math.abs(elevator.currentFloor - floorFrom);
                    }
                }
            }
        });
        
        if(selectedElevator !== null){
            logger(` # INFO # The selected Elevator is: ${selectedElevator.name} for passagerID: ${passagerID}`);
            selectedElevator.destination = floorTo;
            selectedElevator.origin = floorFrom;
            selectedElevator.moveElevator(passagerID);
        } else {
            setTimeout(() => {
                this.getAvailableElevator(floorTo, floorFrom, passagerID);
            }, 250);
        }
    }

    /**
     * Main method to allow passagers to get an Elevator, and then get that elevator to the floor where the passager is
     * and goes to the destination.
     * @param {*} floorTo 
     * @param {*} floorFrom 
     * @param {*} passagerID 
     */
    callAndTravel(floorTo, floorFrom, passagerID){
        let elevator = null
        logger(` Passager ${passagerID} wants to go from ${floorFrom} to ${floorTo}`)
        this.getAvailableElevator(floorTo, floorFrom, passagerID);
    }

    getElevatorsStatus() {
        this.elevators.forEach((elevator) => {
            logger(` # STATUS # The elevator ${elevator.name} is at floor ${elevator.currentFloor}`);
        });
    }
}

const logger = (logString) => {
    console.log(new Date().toISOString() + logString)
};


// create elevators
const elevatorA = new Elevator('A', -1, 9);
const elevatorB = new Elevator('B', 0, 10);

// create building and adding elevators
const building = new Building();
building.addElevator(elevatorA);
building.addElevator(elevatorB);

building.getElevatorsStatus();
const SECOND = 1000;

const createRandomPassenger = (passagerID) => {
    let from = 0;
    let destination = 0;
    let validTravel = false;
    from = generateRandomFloor();
    destination = generateRandomFloor();
    
    building.callAndTravel(destination,  from, passagerID); 
};
  
const generateRandomFloor = (maxFloor=10, minFloor=-1) =>{
    return Math.floor(Math.random() * (maxFloor - minFloor) + minFloor);
};

for (let index = 0; index < 100; index++) {
    createRandomPassenger(index);
}