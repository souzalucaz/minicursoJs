const numeros = [1, 2, 3];
const letras = ["l", "u", "c", "k"];
for (numero of numeros) {
  console.log(numero);
}

letras.forEach((elementosDoArray) => {
  console.log(elementosDoArray);
});
letras.forEach((elementosDoArray,indiceDoArray) => {
  console.log(indiceDoArray, elementosDoArray);
});
