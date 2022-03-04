class Person{
    constructor(name="default", age=0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi my name is ${this.name} and i'm ${this.age}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor) {
            description += `and their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation () {
        return !!this.homeLocation;
    }

    getGreeting() {
        return super.getGreeting() + (this.hasHomeLocation() ? ` and I visit here from ${this.homeLocation}`:"");
    }
}

const me = new Traveler("Saba", 19, "Tehran");
console.log(me.getGreeting());
const other = new Traveler();
console.log(other.getGreeting());

