//Funções de  Arrays

// Verificando se existe um elemento de referencia dentro de um array

// Utilizado para procurar itens dentro de um array de objetos por exemplo.
const carros = [
  { marca: "BMW", modelo: "320i" },
  { marca: "Audi", modelo: "A4" },
  { marca: "Mercedes", modelo: "C200" },
];

// O método find() retorna o valor do PRIMEIRO ELEMENTO do array que satisfizer a função de teste provida. Caso contrário, undefined é retornado.

let funcaoFind = carros.find(function (elementoProcurado) {
  return elementoProcurado.modelo == "428i";
});
console.log(funcaoFind);

let founded = carros.find((serchingElement) => serchingElement.marca == "BMW");

console.log(founded);

let funcaoFind2 = carros.find(function (elementoProcurado) {
  return elementoProcurado.modelo != "428i";
});
console.log(funcaoFind2); // Retornará 320i Pois é o primeiro elemento do array que satisfaz a condição, não retorna o todos os modelos do objeto por exemplo, apenas a primeira ocorrência que atende a condição.
