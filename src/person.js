const isAdult = (age) => age >= 18;
const canDrink = (age) => false; // you can never drink in iran :)
const canMarry = (age) => age >= 10; //lovely logic
const isSenior = (age) => age >= 45;
export {isAdult, canDrink, canMarry, isSenior as default};