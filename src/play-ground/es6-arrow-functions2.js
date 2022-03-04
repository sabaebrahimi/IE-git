const add = function (a, b) {
    console.log(arguments);
    return a + b;
};
console.log(add(25, 27));

const user = {
    name: "Saba",
    cities: ["Shiraz", "Isfahan", "Istanbul", "Bangkok"],
    printCities() {
        const cityMessages = this.cities.map((city) =>
            this.name + " has traveled to " + city);

        return cityMessages;

        // this.cities.forEach((city) => {
        //     console.log(this.name + " has traveled to " + city);
        // });
    }
};
user.printCities();
console.log(user.printCities());

const multiplier = {
    numbers: [12, 137, 96, 21],
    multiplyBy: 29,
    multiply() {
        const multipliesNumbers = this.numbers.map((number) =>
            number * this.multiplyBy
        );
        return multipliesNumbers;
    }
}

console.log(multiplier.multiply());