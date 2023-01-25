//Função que executa uma tarefa mas não retorna nada

function exibeNome() {
  console.log("Lucas");
}

//Função que retorna algo

//Uma função pode ser usada como uma variável

function multiplicaValores(numero) {
  return numero * 2;
}

let resultado = multiplicaValores(5);

console.log(resultado);

resultado *= 2;

console.log(resultado);
