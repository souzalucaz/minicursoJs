// divisivel por 3 = Fizz
// Divisivel por 5 = buzzconsole.log
// divisivel por 3 e por 5 = FizzBuzz
// Não divisivel por 3 ou por 5 = retorna apenas o número digitado
// Não é um número = mensagem de não é um numero

function fizzBuzz(valor) {
  if (valor % 3 == 0 && valor % 5 == 0) {
    return "FizzBuzz";
  } else if (valor % 5 == 0) {
    return "Buzz";
  } else if (valor % 3 == 0) {
    return "Fizz";
  } else if (typeof valor != "number") {
    return "valor não é um número";
  } else {
    return `${valor} não divisivel por 3 ou por 5`;
  }
}
resultado = fizzBuzz(11);

console.log(resultado);
