const carro = {
  marca: "Audi",
  modelo: "A3",
  motor: {
    nome: "TFSI",
    potencia: 1.6,
    tipo: "Turbo",
  },
  ligar: function () {
    console.log("carro ligado!");
  },
};

const carroCopia1 = Object.assign(carro);
console.log(carroCopia1);

// posso também copiar e adicionar outras propriedades

const carroCopia2 = Object.assign(carro, { velocidadeMáxima: 220 });
// quando adiciono uma propriedade eu altero o objeto original
console.log(carroCopia2);
console.log(carro.velocidadeMáxima);
//Uma maneira menos verbosa de cópiar um objeto é fazer um spread {...}

const carroCopia3 = { ...carro};

console.log(carroCopia3);

