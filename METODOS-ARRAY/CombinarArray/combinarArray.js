let carros = ["bmw", "audi", "mercedes", "volksvagem", "Chevrolet"];
const numeros = [2, 4, 6, 8, 10];
const numerosNegativos = [-1, -2, -6, -4, -8];

//Juntando dois Arrays
const carroNumero = carros.concat(numeros);
console.log(carroNumero);

//Dividindo Arrays

const dividido = carroNumero.slice(0, 7); // primeira indicie inicial, indicie final e o intervalo extrai

console.log(dividido);

const dividido2 = carroNumero.slice(2); //com apenas um parametro eu vou do indice 2 até o fim do array
console.log(dividido2);

//Podemos também usar o operador SPREAD

const perdendoAMania = [...numeros, "MáOe", ...dividido];

console.log(perdendoAMania);

