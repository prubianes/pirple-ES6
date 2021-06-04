# Homework 12 (OOP)

## Intro 
Object-oriented programming (OOP) is a paradigm based on the concept of objects, thouse objects have attributes and properties. On this basis, objects can be related one to another, having inheritance between them.


## Application Example
Let think about a Car Service management system.

### User Stories
* As a User I want to know which services where performed to a car
* As a User I want to see service cost
* As a User I want to have accountability of the spare parts to perform services


### Pseudocode
```
class car{
    id,
    brand,
    listOfPerformendServices,
    -------------------------
    addService(),
    removeService(),
    
}

class service {
    name,
    cost,
    sparePartStock
    -------------
    addPart()
    removePart()
    updateCost()
}

class part{
    name,
    image
}
```