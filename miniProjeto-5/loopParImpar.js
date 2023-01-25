// Recebe uma quantidade de valores para avaliar
// exibe se cada valor é par ou ímpar

exibeParImpar(15);

function exibeParImpar(qtdNumerosExibidos) {
  if (qtdNumerosExibidos === 0) {
    return console.log(qtdNumerosExibidos, "é par");
  } else if (typeof qtdNumerosExibidos != "number") {
    return console.log("valor informado não é um número");
  } else {
    for (let i = 1; i <= qtdNumerosExibidos; i++) {
      if (i % 2 == 0) {
        console.log(i, "é par");
      } else {
        console.log(i, "é ímpar");
      }
    }
  }
}
