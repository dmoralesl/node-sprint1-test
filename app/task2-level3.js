class Person {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
}


// LEVEL 3
function* personGenerator(name) {
    // First yield is "default" name to demonstrate how generators
    // can stop in the middle of the execution of the function and wait
    // for next call to continue from that point
    yield new Person('Default');
    // This yield gonna use the name provided in function call
    // to create the new person
    yield new Person(name);
}



module.exports = personGenerator;