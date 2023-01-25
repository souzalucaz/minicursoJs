let n1 = 30;
let n2 = 30;

function maiorValor(valor1, valor2) {
  if (valor1 > valor2) {
    return console.log(
      `O primeiro valor digitado (${valor1}) é maior que o segundo valor digitado (${valor2})`
    );
  } else if (valor2 > valor1) {
    return console.log(
      `O segundo valor digitado (${valor2}) é maior que o primeiro valor digitado (${valor1})`
    );
  } else {
    return console.log("os valores digitados são iguais");
  }
}

maiorValor(n1, n2);
