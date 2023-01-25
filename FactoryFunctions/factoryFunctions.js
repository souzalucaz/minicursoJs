const celular = {
  marca: "Asus",
  tamanhoTela: {
    vertical: 155,
    horizontal: 75,
  },
  capacidadeBateria: 5000,
  ligar: function () {
    console.log("Fazendo ligação...");
  },
};
//Éncapsula informação de um determinado objeto dentro de um método deixa o código mais limpo e mais dinâmico, observeo objeto acima, é um código chapado, caso eu precise alterar alguma informação vou precisar faze-la de forma rudimentar rs, a factory function a baixo RETORNA UM OBJETO, o qual o valor de suas chaves serão definidios pelos argumentos que serão passados quando está função for chamada.

function criarCelular(marca, tamanhoTela, capBateria) {
  return {
    marca: marca,
    tamanhoTela, // quando o valor da chave é o mesmo do parâmetro eu não precisso passar a sintaxe de chave / valor basta adicionar a chave.
    capacidadeBateria: capBateria,
    ligar() {
      console.log("Fazendo ligação...");
    },
  };
}

console.log(criarCelular("Samsung", 5.5, 7000));

// também posso crirar uma variável que terá como valor essa função.

const celular01 = console.log(criarCelular("Nokia", 5.5, 4000));


//Outro exemplo

function criaCarro(marca, modelo, motor = {}) {
  return {
    marca,
    modelo,
    motor,
    ligar() {
      console.log("carro ligado!");
    },
  };
}

const carro01 = criaCarro(
  "BMW",
  320,
  motor = {
    potencia: 2.0,
    tipo: "turbo"
  }
);

console.log(carro01);
