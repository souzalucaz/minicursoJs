//Funções de  Arrays

// Verificando se existe um elemento dentro de um array

const carros = ["C200", "320", "A3", "C200"];

console.log(carros.indexOf("C200")); // mostra a primeira ocorrência do elemento procurado

console.log(carros.lastIndexOf("C200")); // mostra a ultima ocorrência do elemento procurado

console.log(carros.includes("C200")); // Retorna um boolean se existe ou não o elemento  buscado é a forma mais simples

//Exemplo de Uso:

if (carros.includes("320")) {
  console.log("BMW 4 portas, motor turbo 2.0, automática");
}
if (carros.lastIndexOf("C200") != 1) {
  console.log("Não encontramos uma mercedes aqui");
}
if (carros.indexOf("A3") == 2) {
  console.log("Audi com teto solar");
}
