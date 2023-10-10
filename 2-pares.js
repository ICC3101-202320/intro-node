const isEven = number => number % 2 === 0;
const isOdd = number => number % 2 !== 0;

const evenNumbers = numbers => numbers.filter(isEven);
const oddNumbers = numbers => numbers.filter(isOdd);

const numbersArray = [1, 2, 3, 4];
console.log(evenNumbers(numbersArray));
console.log(oddNumbers(numbersArray));