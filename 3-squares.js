// Función que reciba un array y retorne un nuevo array
// con los valores del original al cuadrado
// Ej [1, 2, 3] => [1, 4, 9]
// const squares = numbers => {
//     return numbers.map(x =>{
//         return x * x;
//     });
// }
const square = number => number ** 2;
const squares = numbers => numbers.map(square);

numbersArray = [0, 1, 2, 3, 4, 5, 6];
console.log(squares(numbersArray));