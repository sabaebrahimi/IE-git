// const square = function (x) {
//     return x * x;
// };

// const squareArrow = (x) => {
//     return x * x;
// };

// const squareArrow = (x) => x * x;


// console.log(squareArrow(9));

const getFirstNameArrow = (fullName) => {
    if(fullName) {
        return fullName.split(" ")[0];
    } else {
        return "Can't find name";
    }
}
const getFirstNameArrow2 = (fullName) => fullName ? 
    fullName.split(" ")[0] : "Can't find the name";

console.log(getFirstNameArrow("Saba Ebrahimi"));
console.log(getFirstNameArrow2("Darya Sanie"));
console.log(getFirstNameArrow2(""));