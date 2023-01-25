//Criar função somar que retorna a soma de todos os multiplos de 3 e 5
//multiplos de 3 = 3,6,9
// multiplos de 5 = 5,10,15

let numero = 10;
let multiplos3 = 0;
let multiplo5 = 0;
function encontraMultiplos3e5(num) {
  for (let i = 1; i <= numero; i++) {
    if (i % 3 == 0) {
      multiplos3 += i;
    }
    if (i % 5 == 0) {
      multiplo5 += i;
    }
  }
  return somaResultadoMultiplos3e5(multiplos3, multiplo5);
}

function somaResultadoMultiplos3e5(mult3, mult5) {
  return mult3 + mult5;
}
console.log(encontraMultiplos3e5(numero));
