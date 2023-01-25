const carros = [
  { marca: "BMW", modelo: "320i" },
  { marca: "Audi", modelo: "A4" },
  { marca: "Mercedes", modelo: "C200" },
];

// O método find() retorna o valor do PRIMEIRO ELEMENTO do array que satisfizer a função de teste provida. Caso contrário, undefined é retornado.

let founded = carros.find((serchingElement) => serchingElement.marca == "BMW");

console.log(founded);
