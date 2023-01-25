//ESVAZIANDO UM ARRAY

let carros = ["bmw", "audi", "mercedes"];
const numeros = [2, 4, 6, 8, 10];
let numerosNegativos = [-1, -2, -6, -4, -8];
console.log(carros);
console.log(numeros);
console.log(numerosNegativos);
//SOLUÇÃO 1
numerosNegativos.splice(0, numerosNegativos.length);
console.log(numerosNegativos);
const teste = numerosNegativos;
console.log(teste);
// //SOLUÇÃO 2 - MENOS PERFORMÁTICA
// for (let i = numeros.length; i > 0; i--) {
//   numeros.pop();
//   console.log(numeros);
// }
// //SOLUÇÃO 3 - MENOS PERFORMÁTICA
// while (carros.length != "") {
//   carros.pop();
//   console.log(carros);
// }
// console.log(carros);
