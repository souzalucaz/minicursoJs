//Criar função para exibir o intervalo de numeros primos de determinado numero

//Primos divisivel somente por 1 ou por ele mesmo : 11 , 13
//compostos 10, 8

function exibirNumerosPrimos(limite) {
  for (let i = 2; i <= limite; i++) {
    let ehPrimo = true;
    for (let divisor = 2; divisor < i; divisor++) {
      if (i % divisor == 0) {
        ehPrimo = false;
      }
    }
    if (ehPrimo) console.log(i);
  }
}

exibirNumerosPrimos(15);
