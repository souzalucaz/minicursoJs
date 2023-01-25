//A função construtora basicamente Cria uma classe e posteriormente criamos o objeto note que o nome da função construtora é em PascalCase.

function Carro(marca, modelo, motor) {
  (this.marca = marca), (this.modelo = modelo), (this.motor = motor);
}

const carro02 = new Carro(
  "Audi",
  "A3",
  (motor = { potencia: 1.6, tipo: "turbo" })
);
console.log(carro02);


//Exemplo de factory Function, observe que o nome da função é em camelCase diferentemente da função construtora que é em PascalCase a grande diferença entre ambos é que NA FUNCAO CONSTRUTORA eu INSTANCIO O OBJETO ATRAVÉS DO NEW novoObjeto e na FACTORY FUNCTION eu instancio o objeto RETORNANDO ELE DENTRO DO PRÓPRIO MÉTODO.

function criaCarro(marca, modelo, motor) {
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
  (motor = {
    potencia: 2.0,
    tipo: "turbo",
  })
);

console.log(carro01);
