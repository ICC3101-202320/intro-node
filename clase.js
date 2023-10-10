let nombre = "Juan";
console.log(nombre);
nombre = "Pedro";
console.log(nombre);

const nombre2 = "Juan";
console.log(nombre2);
// nombre2 = "Pedro";
console.log(nombre2);
// INMUTABILIDAD
/*
    Este es un comentario
    multilinea
*/
// Función clásica
function duplicate(x){
    return 2 * x;
}
// Arrow function
const triplicar = (x) => {
    return 3 * x;
}
const cuadruplicar = x => 4 * x;

console.log(duplicate(2));
console.log(triplicar(4));
console.log(cuadruplicar(4));


let values = [1, 2, 3, 4];
let duplicates = [];
let i = 0;
while (i < 4){
    duplicates.push(values[i] * 2);
    i++;
}
console.log(duplicates);

// const duplicates2 = values.map(x => 2 * x)
const duplicates2 = values.map(cuadruplicar)
console.log(duplicates2);